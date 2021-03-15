package com.crio.jumbo.assettracking.repositories;

import com.crio.jumbo.assettracking.entity.Asset;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

}
