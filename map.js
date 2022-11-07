import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function App() {
    // TODO: replace with your access token
    mapboxgl.accessToken = "pk.eyJ1IjoibWFyaXVzZGF2aSIsImEiOiJja3Q4eHY0ajExNmI5MnpqcGExanA4am8zIn0.mv6XDAoM0Hvy_60Z2ffUXA";

    const [marker, setMarker]=useState({})

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });
        const mapMarker = new mapboxgl.Marker()
        .setLngLat([12.567898, 55.67583])
        .addTo(map);
        setMarker(mapMarker);
    }, []);

    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }
    function handleSelectChange(e){
        marker.setLngLat(stores[e.target.value])
    }


    return <>
        <div className="map-overlay">
            <h3>Choose store: </h3>
            <select onChange={handleSelectChange}>
                <option value="central">Central station</option>
                <option value="norrebro">Norrebro street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>;
}

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";
script.onload = () => {
    createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);
}

document.body.appendChild(script)