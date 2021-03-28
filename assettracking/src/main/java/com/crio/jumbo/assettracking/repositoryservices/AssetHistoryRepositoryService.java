package com.crio.jumbo.assettracking.repositoryservices;

import java.util.List;

import com.crio.jumbo.assettracking.entity.AssetHistory;

import org.springframework.stereotype.Service;

@Service
public interface AssetHistoryRepositoryService {
    AssetHistory save(AssetHistory assetHistory);
    List<AssetHistory> findByAssetId(Long id);
}
