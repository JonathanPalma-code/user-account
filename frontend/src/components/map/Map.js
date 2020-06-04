import React, { Component, Fragment } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Main from '../templates/Main';
// import ReportForm from './ReportForm';
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
      report: {
        title: '',
        description: '',
        location: '',
        type: ''}
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

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: 'orange'
      },
      mapboxgl: mapboxgl
    });
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

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

    // clean up on unmount
    return () => map.remove();
  }

  renderForm() {
    return (
      <Fragment>
        <div className='form pb-5'>
          <div className="form-group col-12 d-inline-block pt-3 pl-0">
            <input className='form-control' type='text' id='title' autoComplete='off' onChange={this.updateFields} required />
            <label className='form-label' htmlFor='title'>
              <span className='content-name'>Title</span>
            </label>
          </div>
          <div className='row'>
            <div className="geocoder col-12 col-lg-6 d-inline-block pl-4 p-3" id="geocoder" required />
            <div className="form-group col-12 col-lg-6 d-inline-block p-3">
              <label className='pt-1 pr-1' htmlFor="type">Type:</label>
              <select defaultValue='Monument' className='p-1' name="type" id="type" onChange={this.updateFields} required>
                <option value="Monument">Monument</option>
                <option value="Site">Site</option>
                <option value="Building">Building</option>
                <option value="Object">Object</option>
                <option value="Archeological site">Archeological site</option>
              </select>
            </div>
          </div>
          <div className="form-group col-12 d-inline-block pl-0">
            <div className="form-textarea">
              <textarea placeholder='Describe what you have discovered...' rows='8' className='textarea-input' style={{ resize: 'none' }}
                id='description' onChange={this.updateFields} required />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    const { auth } = this.props
    // console.log(auth);
    if (!auth.uid) return <Redirect to="/" />
    return (
      <Main {...headerProps}>
        <div className='container-fluid'>
          <h2 className='text-right'>Create a new report</h2>
          <div className='row'>
            <div className='map-container col-lg-6'>
              <div className='side-bar'>
                Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
              </div>
              <div id='map' />
            </div>
            <div className='col-lg-6'>
              {this.renderForm()}
            </div>
          </div>
        </div>
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
