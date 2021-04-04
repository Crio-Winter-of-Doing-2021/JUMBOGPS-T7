import React from "react";

const MapContext = React.createContext();

class MapProvider extends React.Component {
  state = {
    pos: [],
    infoWindow: true,
    mapCenterX: null,
    mapCenterY: null,
    markers: [],
    lineArray: [],
  };
  setPos = (locations) => {
    this.setState({ pos: locations });
  };
  setInfoWindow = (value) => {
    this.setState({ infoWindow: value });
  };

  setDetails = (X, Y, res, response, value) => {
    this.setState({
      mapCenterX: X,
      mapCenterY: Y,
      pos: response,
      markers: res,
      infoWindow: value,
    });
  };
  setTDetails = (X, Y, res, response, lineArray, value) => {
    this.setState({
      mapCenterX: X,
      mapCenterY: Y,
      pos: response,
      markers: res,
      infoWindow: value,
      lineArray: lineArray,
    });
  };
  render() {
    const { children } = this.props;
    const {
      mapCenterX,
      lineArray,
      markers,
      mapCenterY,
      pos,
      infoWindow,
    } = this.state;
    const { setDetails, setTDetails } = this;
    console.log(lineArray);
    return (
      <MapContext.Provider
        value={{
          mapCenterX,
          markers,
          mapCenterY,
          pos,
          infoWindow,
          setDetails,
          setTDetails,
          lineArray,
        }}
      >
        {children}
      </MapContext.Provider>
    );
  }
}
// export const MapProvider = MapContext.Provider;
export const MapConsumer = MapContext.Consumer;

export default MapContext;
export { MapProvider };
