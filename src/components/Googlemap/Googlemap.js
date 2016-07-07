import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapConst from './constants';
import 'js-marker-clusterer';
import _get from 'lodash/object/get';
import mapPin from './map-pin.svg';
import dot from './map-red-dot.svg';
import dot2 from './map-red-dot-2.svg';
import dot3 from './map-red-dot-3.svg';
import dot4 from './map-red-dot-4.svg';
import css from './google-map.scss';


const memberOptions = {
  gridSize: 50,
  averageCenter: true,
  styles: [{
    url: dot,
    height: 20,
    width: 20,
    textColor: '#ffffff'
  },
  {
    url: dot2,
    height: 24,
    width: 24,
    textColor: '#ffffff'
  },
  {
    url: dot3,
    height: 28,
    width: 28,
    textColor: '#ffffff'
  },
  {
    url: dot4,
    height: 34,
    width: 34,
    textColor: '#ffffff'
  }]
};


export class Googlemap extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.options = Object.assign({}, GoogleMapConst);
    this.markerClusterers = [];
  }

  render () {
    return (
      <div className={css.container}>
        <div className={css.googleMap} ref="googleMapRoot"></div>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    this.mapInstance = new window.google.maps.Map(ReactDOM.findDOMNode(this.refs.googleMapRoot), this.options);
    this.createLayers();
  }

  componentWillUpdate() {
    this._destoryMarkerClusterer();
  }

  componentDidUpdate() {
    this.createLayers();
  }

  componentWillUnmount() {
    this._destoryMarkerClusterer();
  }

  createLayers() {
    let branches = _get(this.props, 'maps.payload.branches');
    let members = _get(this.props, 'maps.payload.members');

    if (branches) {
      console.log(mapPin);
      this._createMarkerClusterer('branches', this.mapInstance, branches, mapPin, {

      });
    }
    if (members) {
      this._createMarkerClusterer('members', this.mapInstance, members, dot, memberOptions);
    }
  }

  _createMarkerClusterer(key, map, mapPoints, icon, options) {
    let markers = [];
    let markerClusterers = this.markerClusterers;

    if(mapPoints){
      markers = mapPoints.map(point => new window.google.maps.Marker({
        position: {
          lat: parseFloat(point.lat),
          lng: parseFloat(point.lng)
        },
        icon
      }));

      markerClusterers.push({
        key,
        manager: new window.MarkerClusterer(map, markers, options)
      });

      this.markerClusterers = markerClusterers;
    }
  }

  _destoryMarkerClusterer() {
    if (this.markerClusterers) {
      this.markerClusterers.forEach(function(cluster) {
        cluster.manager.clearMarkers();
      });

      this.markerClusterers = [];
    }
  }
}

Googlemap.defaultProps = {

}

Googlemap.contextTypes = {

}

Googlemap.propTypes = {

}

export default Googlemap
