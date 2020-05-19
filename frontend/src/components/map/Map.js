import React from 'react';
import Main from '../templates/Main';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../templates/Main.css';

const headerProps = {
  icon: 'globe',
  title: 'Heritage Protection'
}

require('dotenv').config();

const geolocateStyle = {
  float: 'right',
  margin: '20px',
  padding: '10px'
};

class Map extends React.Component {
  state = {
    viewport: {}
  }

  onViewportChange = viewport => {
    this.setState({
      viewport: {
        width: '50vm',
        height: '50vh',
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 6,
      }
    })
  }
  render(){
    const { viewport } = this.state;
      return (
        <Main {...headerProps}>
          <ReactMapGL
            width="100%"
            height="100%"
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_HISTORIANSGROUP_MAP}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
            onViewportChange={ viewport => this.onViewportChange(viewport)}
          >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          /></ReactMapGL>
        </Main>
      )
  }

}

export default Map;
