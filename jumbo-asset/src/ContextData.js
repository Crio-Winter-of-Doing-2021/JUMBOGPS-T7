import React, { Component, createContext, useState } from "react";

export const MarkerContext = createContext();

class MarkerProvider extends Component {
  // Context state
  state = {
    markers: {},
  };

  setMarkers = (data) => {
    this.setState((prevState) => ({ data }));
  };

  render() {
    const { children } = this.props;
    const { markers } = this.state;
    const { setMarkers } = this;

    return (
      <MarkerContext.Provider
        value={{
          markers,
          setMarkers,
        }}
      >
        {children}
      </MarkerContext.Provider>
    );
  }
}

export default MarkerContext;

export { MarkerProvider };
