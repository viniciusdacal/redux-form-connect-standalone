import React, { Component } from 'react';
import { object } from 'prop-types';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';

export const createReduxForm = store => (...configs) => (WrappedComponent) => {
  const ReduxFormComponent = reduxForm(...configs)(WrappedComponent);
  class ReduxFormWrapper extends Component {
    render() {
      if (this.context.store) {
        return <ReduxFormComponent {...this.props} />;
      }

      return (
        <Provider store={store}>
          <ReduxFormComponent {...this.props} />
        </Provider>
      );
    }
  }
  const contextTypes = ReduxFormComponent.contextTypes || {};
  ReduxFormWrapper.contextTypes = { ...contextTypes, store: object };
  return ReduxFormWrapper;
};

export default createReduxForm;
