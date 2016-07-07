import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import dropdownManager from 'components/Dropdown/DropdownManager';
import 'styles/app.scss';

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <div onClick={() => dropdownManager.close()}>
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
