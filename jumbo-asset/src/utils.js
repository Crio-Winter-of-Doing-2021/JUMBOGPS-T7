export function getCordinates(data) {
  //   const value = useContext(MapContext);
  if (data.data) {
    const latlngdeg = data.data.location;
    const newArray = [];
    const lineArray = [];
    let X = 0;
    let Y = 0;
    let count = 0;
    latlngdeg.forEach((ele) => {
      newArray.push({ lat: ele.latitude, lng: ele.longitude });
      lineArray.push({ lat: ele.latitude + 0.2, lng: ele.longitude + 0.2 });
      lineArray.push({ lat: ele.latitude - 0.2, lng: ele.longitude - 0.2 });

      X += ele.latitude;
      Y += ele.longitude;
      count += 1;
      //   let temp =
    });
    X = X / count;
    Y = Y / count;
    console.log("ARRAY", lineArray);
    return { X, Y, newArray, lineArray };
  } else {
    const newArray = [];
    let X = 0;
    let Y = 0;
    let count = 0;
    data.forEach((ele) => {
      newArray.push({
        lat: ele.location.latitude,
        lng: ele.location.longitude,
      });
      X += ele.location.latitude;
      Y += ele.location.latitude;
      count += 1;
    });
    X = X / count;
    Y = Y / count;
    return { X, Y, newArray };
  }
}

export function getDate(date) {
  const dateUTC = new Date(date);
  const dateIST = new Date(dateUTC.getTime());
  //   console.log(dateIST);
  return dateIST.toDateString();
}
