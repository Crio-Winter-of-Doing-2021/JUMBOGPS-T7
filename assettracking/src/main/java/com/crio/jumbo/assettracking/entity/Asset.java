package com.crio.jumbo.assettracking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "assets")
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "asset_id")
    private Long assetId;
    @Column(name = "asset_type")
    private String assetType;
}
