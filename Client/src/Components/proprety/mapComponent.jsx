import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapVertical = () => {
    const mapContainerRef = useRef(null);

    // Sample coordinates for testing
    const coordinates = [
        [-6, 32],  // Example coordinate 1
        [-8, 31],  // Example coordinate 2
        [-7, 30]   // Example coordinate 3
    ];

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGFpc3Nhb3VpOTkiLCJhIjoiY2x2b3pkazNrMDA1aTJrbzBmdXpyZm95eiJ9.pXWnyETUBt12-6flzNYCeQ'; // Replace with your access token

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-6, 32], // Initial center of the map
            zoom: 5
        });

        // Construct geojson from coordinates
        const geojson = {
            type: 'FeatureCollection',
            features: coordinates.map(coord => ({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coord
                }
            }))
        };

        map.on('load', () => {
            map.loadImage(
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('points', { // Use 'points' instead of 'point'
                        type: 'geojson',
                        data: geojson
                    });
                    map.addLayer({
                        id: 'points', // Use 'points' instead of 'point'
                        type: 'symbol',
                        source: 'points',
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
    }, []); // Removed dependency on coordinates for static testing

    return (
        
        <div className="h-full flex justify-center items-center">
            <div ref={mapContainerRef} style={{ width: '100%', height: '80%' }} />
        </div>
    );
};

export default MapVertical;
