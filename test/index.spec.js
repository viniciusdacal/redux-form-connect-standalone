import React, { Component } from 'react';
import { createStore } from 'redux';
import TestUtils from 'react-dom/test-utils';

import createReduxForm from '../src/index';

class Passthrough extends Component {
  render() {
    return <div />;
  }
}

class Container extends Component {
  render() {
    return <Passthrough {...this.props} />;
  }
}

describe('createReduxForm', () => {
  it('should pass state and props to the given component', () => {
    const store = createStore(() => ({
    }));
    const reduxForm = createReduxForm(store);

    const ConnectedContainer = reduxForm({
      form: 'myForm',
    })(Container);

    const container = TestUtils.renderIntoDocument(
      <ConnectedContainer pass="through" baz={50} />
    );

    const stub = TestUtils.findRenderedComponentWithType(container, Passthrough)


    expect(stub.props.pass).toEqual('through');
    expect(stub.props.change).toBeDefined();
    expect(stub.props.reset).toBeDefined();
    expect(stub.props.baz).toEqual(50);
    expect(() =>
      TestUtils.findRenderedComponentWithType(container, ConnectedContainer)
    ).not.toThrow()
  })
})
