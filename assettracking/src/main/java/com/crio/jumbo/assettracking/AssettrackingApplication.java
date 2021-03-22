package com.crio.jumbo.assettracking;

import com.crio.jumbo.assettracking.utils.ModelMapperConverters;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AssettrackingApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssettrackingApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		modelMapper.addConverter(ModelMapperConverters.assetActiveAssetUpdateDtoConverter);
		modelMapper.addConverter(ModelMapperConverters.assetUpdateDtoAssetActiveConverter);
		return modelMapper;
	}

}
