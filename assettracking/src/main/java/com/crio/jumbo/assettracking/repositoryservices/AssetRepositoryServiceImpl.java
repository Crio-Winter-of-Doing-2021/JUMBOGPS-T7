package com.crio.jumbo.assettracking.repositoryservices;

import java.util.Optional;

import com.crio.jumbo.assettracking.entity.Asset;
import com.crio.jumbo.assettracking.repository.AssetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetRepositoryServiceImpl implements AssetRepositoryService {

    @Autowired
    AssetRepository assetRepository;

    @Override
    public Asset findByAssetId(Long id) {
        Optional<Asset> assetOptional = assetRepository.findById(id);
        if (assetOptional.isPresent()) {
            return assetOptional.get();
        }
        return null;
    }

    @Override
    public Asset saveAsset(Asset asset) {
        return assetRepository.save(asset);
    }

}
