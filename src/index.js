import React from 'react';
import ReactDOM from 'react-dom';

// relative imports
import App from './App';

const root = document.getElementById('root');

const SampleApp = () => (
  <div>
    <h1>This is a basic react project created from scratch.</h1>
    <p>Working...</p>
    <App />
  </div>
);

ReactDOM.render(<SampleApp />, root);