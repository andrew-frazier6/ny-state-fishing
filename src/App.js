import React, { useState, Component } from "react";
import "./App.css";
import mapboxgl, { Marker } from "mapbox-gl";
import axios from "axios";
// import data from "./data.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcmV3LWZyYXppZXI2IiwiYSI6ImNrN2tpMHpuYjAyYTQzZmw4aXYwd2hlNXoifQ.dH4T9CmV2ir0TH5oYLferw";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      lng: -75.409,
      lat: 43.2986,
      zoom: 6.5
    };
  }
  componentDidMount() {
    this.getData();
  }

  placeMarkers = () => {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/andrew-frazier6/ck7gnb8tg19gf1ip4wcgigwbg",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    var Marker = this.state.markers.map((item, i) => {
      new mapboxgl.Marker()
        .setLngLat([item.location.longitude, item.location.latitude])
        .addTo(map);
    });
  };

  getData = () => {
    axios.get("https://newyork-fish-api6.herokuapp.com/").then(res => {
      this.setState({ markers: res.data }, () => this.placeMarkers());
    });
  };

  render() {
    console.log(this.state.marker);
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
