package com.crio.jumbo.assettracking.repositoryservices;

import java.util.List;

import com.crio.jumbo.assettracking.entity.AssetActive;

import org.springframework.stereotype.Service;

@Service
public interface AssetActiveRepositoryService {
    AssetActive save(AssetActive assetActive);
    List<AssetActive> getAllActiveAssets();
}