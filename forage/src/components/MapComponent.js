import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useCoords } from "../hooks"
const google = window.google;

export const MapContainer = ({google}) => {
  const [coords, setCoords] = useCoords();

  if (!google) {
    return <div>Loading...</div>;
  }

  return (
    <Map
      google={google}
      zoom={12 }
      style={{ width: "55vw", height: "75vh", position: "absolute" }}
      center={{ lat: coords.lat, lng: coords.lng }}
    >
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3.30"
})(MapContainer);