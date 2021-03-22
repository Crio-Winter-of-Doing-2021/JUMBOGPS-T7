package com.crio.jumbo.assettracking.service;

import java.util.List;

import com.crio.jumbo.assettracking.dto.AssetDto;
import com.crio.jumbo.assettracking.dto.AssetFilterDto;
import com.crio.jumbo.assettracking.dto.AssetHistoryDto;
import com.crio.jumbo.assettracking.dto.AssetUpdateDto;
import com.crio.jumbo.assettracking.exception.AssetNotFoundException;

import org.springframework.stereotype.Service;

@Service
public interface AssetService {
    
    AssetDto getAssetById(Long id) throws AssetNotFoundException;
    Long addNewAsset(AssetDto assetDto);
    boolean updateAssetLocation(AssetUpdateDto assetUpdateDto) throws AssetNotFoundException;

    List<AssetUpdateDto> getAssetsLatestLocation(AssetFilterDto assetFilterDto);
    AssetHistoryDto getAssetHistoryById(Long id) throws AssetNotFoundException;

}
