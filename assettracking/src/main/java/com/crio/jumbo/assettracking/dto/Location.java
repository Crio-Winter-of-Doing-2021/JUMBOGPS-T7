package com.crio.jumbo.assettracking.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Location {
  @JsonProperty("latitude")
  private Double latitude;

  @JsonProperty("longitude")
  private Double longitude;

  @JsonProperty("updated")
  private LocalDateTime updated;
}
