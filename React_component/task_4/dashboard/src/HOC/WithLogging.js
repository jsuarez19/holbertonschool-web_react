import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getComponentName()} is going to unmount`);
    }
    
    getComponentName() {
      return WrappedComponent.displayName || 'Component';
    }
  };

  // For debugging
  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || 'Component'})`;
  return WithLoggingComponent;
}

export default WithLogging;