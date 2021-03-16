package com.crio.jumbo.assettracking.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.crio.jumbo.assettracking.dto.AssetDto;
import com.crio.jumbo.assettracking.dto.AssetFilterDto;
import com.crio.jumbo.assettracking.dto.AssetHistoryDto;
import com.crio.jumbo.assettracking.dto.AssetUpdateDto;
import com.crio.jumbo.assettracking.dto.Location;
import com.crio.jumbo.assettracking.entity.Asset;
import com.crio.jumbo.assettracking.entity.AssetActive;
import com.crio.jumbo.assettracking.entity.AssetHistory;
import com.crio.jumbo.assettracking.repositories.AssetActiveRepository;
import com.crio.jumbo.assettracking.repositories.AssetHistoryRepository;
import com.crio.jumbo.assettracking.repositories.AssetRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    AssetActiveRepository assetActiveRepository;

    @Autowired
    AssetHistoryRepository assetHistoryRepository;

    @Autowired
    ModelMapper modelMapper;
    
    @GetMapping("/assetDetails/{id}")
    public ResponseEntity<Asset> getAsset(@PathVariable Long id) {
        Optional<Asset> asset = assetRepository.findById(id);
        if (asset.isPresent())
            return ResponseEntity.ok().body(asset.get());
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Long> postAsset(@RequestBody AssetDto asset) {
        log.info(asset);
        Asset savedAsset = assetRepository.save(modelMapper.map(asset, Asset.class));
        return ResponseEntity.ok().body(savedAsset.getId());
    }

    @GetMapping("/assets")
    public ResponseEntity<List<AssetUpdateDto>> getAssetsLatestLocation(AssetFilterDto assetFilterDto) {
        log.info(assetFilterDto);
        List<AssetActive> activeAssets = assetActiveRepository.findAll();
        List<AssetUpdateDto> activeAssetUpdateDtos = activeAssets.stream()
                .map(activeAsset -> modelMapper.map(activeAsset, AssetUpdateDto.class)).collect(Collectors.toList());
        return ResponseEntity.ok().body(activeAssetUpdateDtos);
    }

    @GetMapping("/assets/{id}")
    public ResponseEntity<AssetHistoryDto> getAssetHistory(@PathVariable("id") Long assetId) {
        List<AssetHistory> assetHistory = assetHistoryRepository.findByAssetId(assetId);

        AssetHistoryDto historyDto = new AssetHistoryDto();
        historyDto.setAssetId(assetId);
        historyDto.setAssetType(assetHistory.get(0).getAssetType());

        for (AssetHistory history : assetHistory) {
            Location location = new Location(history.getLatitude(), history.getLongitude(), history.getUpdated());
            historyDto.getAssetLocationHistory().add(location);
        }

        return ResponseEntity.ok().body(historyDto);
    }

    @PostMapping("/updateLocation")
    public ResponseEntity<Boolean> updateAssetLocation(@RequestBody AssetUpdateDto assetUpdateDto) {
        if (assetUpdateDto != null && assetUpdateDto.getLocation().getUpdated() == null) {
            assetUpdateDto.getLocation().setUpdated(LocalDateTime.now());
        }
        log.info(assetUpdateDto);
        AssetActive assetActive = modelMapper.map(assetUpdateDto, AssetActive.class);
        AssetHistory assetHistory = modelMapper.map(assetUpdateDto, AssetHistory.class);
        assetHistory.setId(null);
        assetHistoryRepository.save(assetHistory);
        assetActiveRepository.save(assetActive);
        return ResponseEntity.ok().build();
    }
}
