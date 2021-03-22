package com.crio.jumbo.assettracking.controller;

import java.util.List;

import com.crio.jumbo.assettracking.dto.AssetDto;
import com.crio.jumbo.assettracking.dto.AssetFilterDto;
import com.crio.jumbo.assettracking.dto.AssetHistoryDto;
import com.crio.jumbo.assettracking.dto.AssetUpdateDto;
import com.crio.jumbo.assettracking.dto.Location;
import com.crio.jumbo.assettracking.entity.AssetHistory;
import com.crio.jumbo.assettracking.exception.AssetNotFoundException;
import com.crio.jumbo.assettracking.repository.AssetActiveRepository;
import com.crio.jumbo.assettracking.repository.AssetHistoryRepository;
import com.crio.jumbo.assettracking.repository.AssetRepository;
import com.crio.jumbo.assettracking.service.AssetService;

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
    AssetService assetService;

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    AssetActiveRepository assetActiveRepository;

    @Autowired
    AssetHistoryRepository assetHistoryRepository;

    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/assetDetails/{id}")
    public ResponseEntity<AssetDto> getAsset(@PathVariable Long id) {

        if (id == null) {
            log.error("Received id as null");
            return ResponseEntity.badRequest().build();
        }

        try {
            AssetDto assetDto = assetService.getAssetById(id);
            return ResponseEntity.ok().body(assetDto);
        } catch (AssetNotFoundException e) {
            log.error(e.getMessage());
            log.info(e);
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Long> addNewAsset(@RequestBody AssetDto asset) {
        log.info(asset);
        Long id = assetService.addNewAsset(asset);
        return ResponseEntity.ok().body(id);
    }

    @GetMapping("/assets")
    public ResponseEntity<List<AssetUpdateDto>> getAssetsLatestLocation(AssetFilterDto assetFilterDto) {
        log.info(assetFilterDto);
        List<AssetUpdateDto> activeAssetUpdateDtos = assetService.getAssetsLatestLocation(assetFilterDto);
        return ResponseEntity.ok().body(activeAssetUpdateDtos);
    }

    @GetMapping("/assets/{id}")
    public ResponseEntity<AssetHistoryDto> getAssetHistory(@PathVariable("id") Long assetId) {

        try {
            AssetHistoryDto assetHistory = assetService.getAssetHistoryById(assetId);
            return ResponseEntity.ok().body(assetHistory);
        } catch (AssetNotFoundException e) {
            log.error(e.getMessage());
            log.info(e);
        }

        return ResponseEntity.badRequest().build();

    }

    @PostMapping("/updateLocation")
    public ResponseEntity<Boolean> updateAssetLocation(@RequestBody AssetUpdateDto assetUpdateDto) {
        if (assetUpdateDto == null) {
            return ResponseEntity.badRequest().build();
        }

        log.info(assetUpdateDto);

        try {
            boolean updated = assetService.updateAssetLocation(assetUpdateDto);
            if (updated)
                return ResponseEntity.ok().build();
        } catch (AssetNotFoundException e) {
            log.error(e.getMessage());
            log.info(e);
        }

        return ResponseEntity.badRequest().build();
    }
}
