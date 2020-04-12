import React, {Component} from 'react';
import './loadingHOC.css';

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
  );

const LoadingHOC = (loadingProp) => (WrappedComponent) => { /** КАК ЭТО РАБОТАЕТ????????*/
  return class LoadingHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
      <div className="preloader" /> :
      <WrappedComponent {...this.props} />;
    }
  }
}

export default LoadingHOC;
/**loadingProp - идентификатор данных (пропсов, получаемых компонентом)*/
