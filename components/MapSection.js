import React, { useEffect, useState } from 'react';
import Map from 'react-map-gl';
import mapboxgl, {Popup} from 'mapbox-gl';
import getCenter from 'geolib/es/getCenter';
import {Marker} from 'react-map-gl';

mapboxgl.accessToken = process.env.mapbox_key;

function MapSection({searchResults}) {

    // const [lng, setLng] = useState(-70.9);
    // const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const coordinates = searchResults.map(result => (
        {
            longitude: result.long, 
            latitude: result.lat
        }
    ))

    const center = getCenter(coordinates);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style:'mapbox://styles/navyashr4/cl4f9f8bv000d14ntv6yglpj6',
            center: [center.longitude,center.latitude],
            zoom: zoom,
            onMove: (evt) => setViewport(evt.viewport)
        });
    })

    //marker
    // // Create a new marker.
    // const marker = new Marker()
    // .setLngLat([30.5, 50.5])
    // .addTo("map");

    return (
        <Map id="map"></Map>
    );
}

export default MapSection


// {searchResults.map(result=>(
//     <div key={result.long}>
//         <Marker
//             longitude={result.long}
//             latitude={result.lat}
//             offsetLeft={-20}
//             offsetTop={-10}>
//                 <p>📌</p>
//         </Marker>
//     </div>
// ))}