package com.crio.jumbo.assettracking.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AssetFilterDto {
    @JsonProperty("max")
    private Integer max;

    @JsonProperty("type")
    private String type;

    @JsonProperty("start")
    private String start;

    @JsonProperty("end")
    private String end;
}
