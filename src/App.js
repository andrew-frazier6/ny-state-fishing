import React, { useState, Component } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcmV3LWZyYXppZXI2IiwiYSI6ImNrN2djajVocTAwN3Ezb3RkY2xldGllM2gifQ.zd_rl93xQrHDhFddfdpuLQ";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -75.409,
      lat: 43.2986,
      zoom: 6.5
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/andrew-frazier6/ck7gnb8tg19gf1ip4wcgigwbg",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const fishingSpots = res.data;
      this.setState({ persons });
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
