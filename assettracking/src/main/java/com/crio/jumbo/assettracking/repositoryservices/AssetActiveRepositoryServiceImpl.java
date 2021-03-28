package com.crio.jumbo.assettracking.repositoryservices;

import java.util.List;

import com.crio.jumbo.assettracking.entity.AssetActive;
import com.crio.jumbo.assettracking.repository.AssetActiveRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetActiveRepositoryServiceImpl implements AssetActiveRepositoryService {

    @Autowired
    AssetActiveRepository assetActiveRepository;

    @Override
    public AssetActive save(AssetActive assetActive) {
        return assetActiveRepository.save(assetActive);
    }

    @Override
    public List<AssetActive> getAllActiveAssets() {
        return assetActiveRepository.findAll();
    }
    
}
