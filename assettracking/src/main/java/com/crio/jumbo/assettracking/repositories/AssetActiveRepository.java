package com.crio.jumbo.assettracking.repositories;

import com.crio.jumbo.assettracking.entity.AssetActive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetActiveRepository extends JpaRepository<AssetActive, Long> {
    
}
