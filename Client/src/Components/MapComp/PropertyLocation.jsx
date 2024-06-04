import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapLocation = ({ coords }) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGFpc3Nhb3VpOTkiLCJhIjoiY2x2b3pkazNrMDA1aTJrbzBmdXpyZm95eiJ9.pXWnyETUBt12-6flzNYCeQ'; // Replace with your access token
        if (mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
            mapboxgl.setRTLTextPlugin(
                'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
                null,
                true // Lazy load the plugin
            );
        }
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: coords, // Initial center of the map
            zoom: 16
        });

        map.on('load', () => {
            map.loadImage(
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);

                    // Construct GeoJSON from the single coordinate
                    const geojson = {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: coords
                            }
                        }]
                    };

                    map.addSource('Point', {
                        type: 'geojson',
                        data: geojson
                    });
                    map.addLayer({
                        id: 'Point',
                        type: 'symbol',
                        source: 'Point',
                        layout: {
                            'icon-image': 'custom-marker',
                            'icon-size': 0.1,
                            'icon-allow-overlap': true
                        }
                    });
                }
            );
        });

        return () => map.remove(); // Cleanup the map on unmount
    }, []); // No dependencies for static testing

    return (
        <div>
            <div ref={mapContainerRef} style={{ width: '100%', height: '60vh' }} />
        </div>
    );
};

export default MapLocation;


// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';

// const MapLocation = ({ coords }) => {
//     console.log('hna', coords);
//     const mapContainerRef = useRef(null);
//     const [marker, setMarker] = useState(null);

//     useEffect(() => {
//         if (!coords || coords.length !== 2) {
//             // If coordinates are not provided or are invalid, return early
//             return;
//         }

//         mapboxgl.accessToken = 'pk.eyJ1IjoibGFpc3Nhb3VpOTkiLCJhIjoiY2x2b3pkazNrMDA1aTJrbzBmdXpyZm95eiJ9.pXWnyETUBt12-6flzNYCeQ'; // Replace with your access token

//         const map = new mapboxgl.Map({
//             container: mapContainerRef.current,
//             style: 'mapbox://styles/mapbox/streets-v9',
//             center: coords, // Set the center of the map to the provided coordinates
//             zoom: 8
//         });
//         // Create a marker at the provided coordinates
//         const newMarker = new mapboxgl.Marker()
//             .setLngLat(coords)
//             .addTo(map);

//         // Set the marker state
//         setMarker(newMarker);

//         // Update marker position when map is moved or zoomed
//         map.on('move', () => {
//             const markerLngLat = marker.getLngLat();
//             newMarker.setLngLat(markerLngLat);
//         });
//         return () => map.remove(); // Cleanup the map on unmount
//     }, [coords]); // Dependency on coordinates

//     return (
//         <div>
//             <div ref={mapContainerRef} style={{ width: '100%', height: '60vh' }} />
//         </div>
//     );
// };

// export default MapLocation;