
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const UpdateMap = ({ onCoordinatesChange, coordinates }) => {
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
            center: coordinates,
            zoom: 12
        });

        const canvas = map.getCanvasContainer();

        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: coordinates
                    }
                }
            ]
        };

        function updateMarkerPosition() {
            const center = map.getCenter();
            geojson.features[0].geometry.coordinates = [center.lng, center.lat];
            map.getSource('point').setData(geojson);
        }

        function onMove(e) {
            const coords = e.lngLat;
            canvas.style.cursor = 'grabbing';
            geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
            map.getSource('point').setData(geojson);
        }

        function onUp(e) {
            const coords = e.lngLat;
            canvas.style.cursor = '';

            if (onCoordinatesChange) {
                onCoordinatesChange({ lng: coords.lng, lat: coords.lat });
            }

            map.off('mousemove', onMove);
            map.off('touchmove', onMove);
        }

        // map.on('zoom', () => {
        //     updateMarkerPosition();
        // });

        map.on('load', () => {
            map.loadImage(
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('point', {
                        type: 'geojson',
                        data: geojson
                    });
                    map.addLayer({
                        id: 'point',
                        type: 'symbol',
                        source: 'point',
                        layout: {
                            'icon-image': 'custom-marker',
                            'icon-size': 0.08,
                            'icon-allow-overlap': true
                        }
                    });
                }
            );

            map.on('mouseenter', 'point', () => {
                canvas.style.cursor = 'move';
            });

            map.on('mousedown', 'point', (e) => {
                e.preventDefault();
                canvas.style.cursor = 'grab';

                map.on('mousemove', onMove);
                map.once('mouseup', onUp);
            });

            map.on('touchstart', 'point', (e) => {
                if (e.points.length !== 1) return;
                e.preventDefault();

                map.on('touchmove', onMove);
                map.once('touchend', onUp);
            });
        });

        return () => map.remove();
    }, [onCoordinatesChange]);

    return (
        <div className='mx-auto mt-4 ' ref={mapContainerRef} style={{ width: '96%', height: '400px', marginBottom: "45px" }} />
    );
};

export default UpdateMap;
