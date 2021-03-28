package com.crio.jumbo.assettracking.repositoryservices;

import java.util.List;

import com.crio.jumbo.assettracking.entity.Asset;

import org.springframework.stereotype.Service;

@Service
public interface AssetRepositoryService {
    Asset findByAssetId(Long id);
    Asset saveAsset(Asset asset);
    List<Asset> findAll();
}
