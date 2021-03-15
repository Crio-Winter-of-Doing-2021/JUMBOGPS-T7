package com.crio.jumbo.assettracking.entity;

import java.time.LocalDateTime;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "assets_active")
public class AssetActive {

  @Id
  @Column(name = "asset_id")
  private Long assetId;

  @Column(name = "asset_type")
  private String assetType;

  @Column(name = "latitude")
  private Double latitude;

  @Column(name = "longitude")
  private Double longitude;

  @Column(name = "updated")
  private LocalDateTime updated;
}
