import React, { useState, Component } from "react";
import Mapbox from "mapbox-gl";
import "./App.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcmV3LWZyYXppZXI2IiwiYSI6ImNrN2djajVocTAwN3Ezb3RkY2xldGllM2gifQ.zd_rl93xQrHDhFddfdpuLQ";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -75.409,
      lat: 42.7986,
      zoom: 5.7
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }
  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
