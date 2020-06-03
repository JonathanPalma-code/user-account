import React, { Component } from 'react';
import Main from '../templates/Main';
import ReportForm from './ReportForm';
import mapboxgl from 'mapbox-gl';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
    const { auth } = this.props
    // console.log(auth);
    if (!auth.uid) return;
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    // update the lng, lat and zoom
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    const pulsingDot = {
      width: 100,
      height: 100,
      data: new Uint8Array(100 * 100 * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

      // called once before every frame where the icon will be used
      render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (100 / 2) * 0.3;
        const outerRadius = (100 / 2) * 0.7 * t + radius;
        const context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };

    map.on('load', function () {
      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-0.2157315, 50.915691]
              }
            }
          ]
        }
      });
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': 'pulsing-dot'
        }
      });
    });

    // clean up on unmount
    return () => map.remove();
  }

  render() {
    const { auth } = this.props
    // console.log(auth);
    if (!auth.uid) return <Redirect to="/" />
    return (
      <Main {...headerProps}>
        <div className='map-container container-fluid'>
          <div className='side-bar'>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
          </div>
          <div id='map' />
        </div>
        <ReportForm />
      </Main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Map);
