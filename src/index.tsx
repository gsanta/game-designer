import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../msw_mock_api/src/mocks/browser');
  worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.render(<App />, document.getElementById('root'));
