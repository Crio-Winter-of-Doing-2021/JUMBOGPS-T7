package com.crio.jumbo.assettracking.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import com.crio.jumbo.assettracking.dto.AssetDto;
import com.crio.jumbo.assettracking.dto.AssetFilterDto;
import com.crio.jumbo.assettracking.dto.AssetHistoryDto;
import com.crio.jumbo.assettracking.dto.AssetUpdateDto;
import com.crio.jumbo.assettracking.dto.Location;
import com.crio.jumbo.assettracking.entity.Asset;
import com.crio.jumbo.assettracking.entity.AssetActive;
import com.crio.jumbo.assettracking.entity.AssetHistory;
import com.crio.jumbo.assettracking.exception.AssetNotFoundException;
import com.crio.jumbo.assettracking.repositoryservices.AssetActiveRepositoryService;
import com.crio.jumbo.assettracking.repositoryservices.AssetHistoryRepositoryService;
import com.crio.jumbo.assettracking.repositoryservices.AssetRepositoryService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetServiceImpl implements AssetService {

    @Autowired
    AssetRepositoryService assetRepositoryService;

    @Autowired
    AssetActiveRepositoryService assetActiveRepositoryService;

    @Autowired
    AssetHistoryRepositoryService assetHistoryRepositoryService;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public AssetDto getAssetById(Long id) throws AssetNotFoundException {
        Asset asset = assetRepositoryService.findByAssetId(id);

        if (asset == null) {
            throw new AssetNotFoundException("No Asset found with asset id: " + id);
        }

        return modelMapper.map(asset, AssetDto.class);
    }

    @Override
    public Long addNewAsset(AssetDto assetDto) {
        Asset asset = modelMapper.map(assetDto, Asset.class);
        Asset savedAsset = assetRepositoryService.saveAsset(asset);
        return savedAsset.getAssetId();
    }

    @Override
    public boolean updateAssetLocation(AssetUpdateDto assetUpdateDto) throws AssetNotFoundException {

        // validate asset id
        Asset asset = assetRepositoryService.findByAssetId(assetUpdateDto.getAssetId());
        if (asset == null) {
            // asset id is not valid
            throw new AssetNotFoundException("Asset id is invalid");
        }
        // add timestamp if not present
        if (assetUpdateDto.getLocation().getUpdated() == null) {
            assetUpdateDto.getLocation().setUpdated(LocalDateTime.now());
        }

        AssetActive assetActive = modelMapper.map(assetUpdateDto, AssetActive.class);
        AssetHistory assetHistory = modelMapper.map(assetActive, AssetHistory.class);

        assetActiveRepositoryService.save(assetActive);
        assetHistoryRepositoryService.save(assetHistory);

        return true;
    }

    @Override
    public List<AssetUpdateDto> getAssetsLatestLocation(AssetFilterDto assetFilterDto) {
        List<AssetActive> activeAssets = assetActiveRepositoryService.getAllActiveAssets();
        List<AssetUpdateDto> activeAssetUpdateDtos = activeAssets.stream()
                .map(activeAsset -> modelMapper.map(activeAsset, AssetUpdateDto.class)).collect(Collectors.toList());
        return activeAssetUpdateDtos;
    }

    @Override
    public AssetHistoryDto getAssetHistoryById(Long id) throws AssetNotFoundException {
        // validate asset id
        Asset asset = assetRepositoryService.findByAssetId(id);
        if (asset == null) {
            // asset id is not valid
            throw new AssetNotFoundException("Asset id is invalid");
        }

        List<AssetHistory> assetHistory = assetHistoryRepositoryService.findByAssetId(id);

        AssetHistoryDto historyDto = new AssetHistoryDto();
        historyDto.setAssetId(id);
        historyDto.setAssetType(asset.getAssetType());

        for (AssetHistory history : assetHistory) {
            Location location = new Location(history.getLatitude(), history.getLongitude(), history.getUpdated());
            historyDto.getAssetLocationHistory().add(location);
        }

        return historyDto;
    }

}
