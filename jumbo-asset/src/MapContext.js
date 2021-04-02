import React from "react";

const MapContext = React.createContext();

class MapProvider extends React.Component {
  state = {
    pos: [],
    infoWindow: true,
  };
  setPos = (locations) => {
    this.setState({ pos: locations });
  };
  setInfoWindow = (value) => {
    this.setState({ infoWindow: value });
  };

  render() {
    const { children } = this.props;
    const { pos, infoWindow } = this.state;
    const { setPos, setInfoWindow } = this;

    return (
      <MapContext.Provider value={{ pos, infoWindow, setPos, setInfoWindow }}>
        {children}
      </MapContext.Provider>
    );
  }
}
// export const MapProvider = MapContext.Provider;
export const MapConsumer = MapContext.Consumer;

export default MapContext;
export { MapProvider };
