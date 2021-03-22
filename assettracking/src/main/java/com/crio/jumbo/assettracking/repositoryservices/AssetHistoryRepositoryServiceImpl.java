package com.crio.jumbo.assettracking.repositoryservices;

import java.util.List;

import com.crio.jumbo.assettracking.entity.AssetHistory;
import com.crio.jumbo.assettracking.repository.AssetHistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssetHistoryRepositoryServiceImpl implements AssetHistoryRepositoryService {

    @Autowired
    AssetHistoryRepository assetHistoryRepository;

    @Override
    public AssetHistory save(AssetHistory assetHistory) {
        return assetHistoryRepository.save(assetHistory);
    }

    @Override
    public List<AssetHistory> findByAssetId(Long id) {
        return assetHistoryRepository.findByAssetId(id);
    }

}
