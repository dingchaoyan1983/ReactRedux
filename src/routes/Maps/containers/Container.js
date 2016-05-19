import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { fetchMapData } from '../modules/reducer';
import _get from 'lodash/object/get';

import GoogleMap from 'components/GoogleMap';
import Mapsliderbar from 'components/Maps/Mapsliderbar';
import MapTypeSelector from 'components/Maps/MapTypeSelector';

const mapStateToProps = (state) => {
  return {
    maps: state.maps
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMapData
  }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Maps extends React.Component {
  render () {
    let isLoading = _get(this.props, 'maps.meta.isLoading');

    return (
      <div className={classnames('map_container', isLoading ? 'loading-overlay' : '')}>
        <GoogleMap ref="googleMap" {...this.props}>
          <Mapsliderbar>
            <header className="map-layers">
              <MapTypeSelector {...this.props}/>
            </header>
          </Mapsliderbar>
        </GoogleMap>
      </div>
    )
  }
}
