package com.crio.jumbo.assettracking.repository;

import java.util.List;

import com.crio.jumbo.assettracking.entity.AssetHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetHistoryRepository extends JpaRepository<AssetHistory, Long> {
    List<AssetHistory> findByAssetId(Long assetId);
}
