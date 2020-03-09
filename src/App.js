import React, { useState, Component } from "react";
import "./App.css";
import mapboxgl, { Marker } from "mapbox-gl";
// import axios from "axios";
import data from "./data.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcmV3LWZyYXppZXI2IiwiYSI6ImNrN2djajVocTAwN3Ezb3RkY2xldGllM2gifQ.zd_rl93xQrHDhFddfdpuLQ";

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
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/andrew-frazier6/ck7gnb8tg19gf1ip4wcgigwbg",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    var Markers = new mapboxgl.Marker()
      .setLngLat([-75.946453998, 43.735181544])
      .addTo(map);

    var Marker = data.map((item, i) => {
      new mapboxgl.Marker()
        .setLngLat([item.location.longitude, item.location.latitude])
        .addTo(map);
    });
  }
  // }
  // axios.get("http://localhost:8000/").then(res => {
  //   console.log(this.state.markers);
  //   this.setState({ markers: res.data });
  //   // console.log(markers);
  // });
  // }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
        {/* <Marker>
          <div>
            key={data.PerformanceMark._id}
            latitude={data.location.latitude}
            longitude={data.location.longitude}
          </div>
        </Marker> */}
      </div>
    );
  }
}
