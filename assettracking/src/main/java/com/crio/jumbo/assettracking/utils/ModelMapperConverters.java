package com.crio.jumbo.assettracking.utils;

import com.crio.jumbo.assettracking.dto.AssetUpdateDto;
import com.crio.jumbo.assettracking.dto.Location;
import com.crio.jumbo.assettracking.entity.AssetActive;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

public class ModelMapperConverters {

  private ModelMapperConverters() {
  }

  public static final Converter<AssetUpdateDto, AssetActive> assetUpdateDtoAssetActiveConverter = new Converter<AssetUpdateDto, AssetActive>() {
    @Override
    public AssetActive convert(MappingContext<AssetUpdateDto, AssetActive> mappingContext) {
      AssetUpdateDto assetUpdateDto = mappingContext.getSource();
      AssetActive assetActive = new AssetActive();
      assetActive.setAssetId(assetUpdateDto.getAssetId());
      assetActive.setAssetType(assetUpdateDto.getAssetType());
      assetActive.setLatitude(assetUpdateDto.getLocation().getLatitude());
      assetActive.setLongitude(assetUpdateDto.getLocation().getLongitude());
      assetActive.setUpdated(assetUpdateDto.getLocation().getUpdated());
      return assetActive;
    }
  };

  public static final Converter<AssetActive, AssetUpdateDto> assetActiveAssetUpdateDtoConverter = new Converter<AssetActive, AssetUpdateDto>() {
    @Override
    public AssetUpdateDto convert(MappingContext<AssetActive, AssetUpdateDto> mappingContext) {
      AssetActive assetActive = mappingContext.getSource();
      Location location = new Location(assetActive.getLatitude(), assetActive.getLongitude(), assetActive.getUpdated());
      return new AssetUpdateDto(assetActive.getAssetId(), assetActive.getAssetType(), location);
    }
  };
}
