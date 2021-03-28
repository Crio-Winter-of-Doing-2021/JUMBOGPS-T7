package com.crio.jumbo.assettracking.exception;

public class AssetNotFoundException extends Exception {
    public AssetNotFoundException() {
        super();
    }

    public AssetNotFoundException(String message) {
        super(message);
    }
}
