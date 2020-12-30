import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const useCoords = () => {
    const [coords, setCoords] = useState({ lat: null, lng: null });

    useEffect(() => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((position) => setCoords({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }));

        } else {
            alert("Geolocation is not supported by this device.")
        }
    });

    return [coords, setCoords]
}