import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import classnames from 'classnames';
import { fetchMapData } from '../modules/reducer';
import _get from 'lodash/object/get';
import css from './maps.css';

import GoogleMap from 'components/GoogleMap';
import Mapsliderbar from 'components/Maps/Mapsliderbar';
import MapTypeSelector from 'components/Maps/MapTypeSelector';

const mapStateToProps = (state) => {
  return {
    maps: state.maps
  }
}

const mapDispatchToProps = () => {
  return {
    fetchMapData
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Maps extends React.Component {
  render () {
    let isLoading = _get(this.props, 'maps.meta.isLoading');

    return (
      <div className={classnames(css.container, isLoading ? 'loading-overlay' : '')}>
        <GoogleMap ref="googleMap" {...this.props}>
          <Mapsliderbar>
            <header className={css.layers}>
              <MapTypeSelector {...this.props}/>
            </header>
          </Mapsliderbar>
        </GoogleMap>
      </div>
    )
  }
}
