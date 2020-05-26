import React, { Component } from 'react';
import Main from '../templates/Main';
import mapboxgl from 'mapbox-gl';
import './Map.css';

require('dotenv').config();

mapboxgl.accessToken = process.env.REACT_APP_HISTORIANSGROUP_MAP;

const headerProps = {
  icon: 'globe',
  title: 'Heritage in Danger'
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -0.118092,
      lat: 51.509865,
      zoom: 6,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // update the lng, lat and zoom
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    // clean up on unmount
    return () => map.remove();
  }

  render() {
    return (
      <Main {...headerProps}>
        <div>
          <div className='side-bar'>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
        <div ref={el => this.mapContainer = el} className='map-container' />
        </div>
      </Main>
    )
  }
}

export default Map;
