import React, { useRef, useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import "../servicesMap/servicesmap.css"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import { useValue } from '../../../contexts/ContextProvider';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import { Marker } from 'react-map-gl';
import { Viewport } from 'deck.gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFtLTIxIiwiYSI6ImNsaHFmd2J4YjIzZnQzcXMxM2Q3bnYzdWwifQ.wNhl45GopBydEKapuvDQ0A';


export default function ServicesMap() {
  const [newPlace, setNewPlace] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.216);
  const [lat, setLat] = useState(28.6448);
  const [zoom, setZoom] = useState(4.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(
      new MapBoxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      );
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  function handleClick(e) {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    })
  }


  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" onDoubleClick={handleClick} />
    </div>
  )
}
