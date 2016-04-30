import React from 'react';
import TestUtils from 'react-addons-test-utils';

import App from '../app.jsx';

describe('app', function () {
  it('renders without issues', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    expect(app).to.be.defined;
  });
});