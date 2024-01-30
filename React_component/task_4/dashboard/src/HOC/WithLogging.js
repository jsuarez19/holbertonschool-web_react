import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLoggingComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${this.getComponentName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getComponentName()} is going to unmount`);
    }

    render() {
      return <WithLoggingComponent {...this.props} />
    }
    
    getComponentName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
  };

  // For debugging
  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || 'Component'})`;
  return WithLoggingComponent;
}

export default WithLogging;