import React from "react"
import "../styles/Map.css"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map() {
    const markers = [
        {
            geocode: [-37.8136, 144.9631],
            popUp: "Pop up 1"
        },

        {   
            geocode: [-37.8136, 144.9631],
            popUp: "Pop up 2"
        },

        {
            geocode: [-27.4705, 153.0260],
            popUp: "Pop up 3"
        },

        {
            geocode: [-33.8688, 151.2093],
            popUp: "Pop up 4"
        },

        {
            geocode: [-33.8688, 151.2093],
        },

        {
            geocode: [-34.9285, 138.6007],
        },

        {
            geocode: [-31.9523, 115.8613],
        }
    ];

    return(
        <MapContainer center={[-25.2744, 133.7751]} zoom={5}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

            {markers.map(marker => (
                <Marker position={marker.geocode}>
                </Marker>
            ))
            }
        </MapContainer>
    )
}
