package com.crio.jumbo.assettracking.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssetDto {

    @JsonProperty("asset_id")
    private Long assetId;

    @JsonProperty("asset_type")
    private String assetType;
}
