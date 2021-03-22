package com.crio.jumbo.assettracking.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class AssetHistoryDto {

    @JsonProperty("asset_id")
    private Long assetId;

    @JsonProperty("asset_type")
    private String assetType;

    @JsonProperty("location")
    private List<Location> assetLocationHistory;

    public AssetHistoryDto() {
        this.assetLocationHistory = new ArrayList<>();
    }
}
