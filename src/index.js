import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const SampleApp = () => (
  <div>
    <h1>This is a basic react project created from scratch.</h1>
    <p>Working...</p>
  </div>
);

ReactDOM.render(<SampleApp />, root);