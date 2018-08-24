import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export { default as Home } from './Home';
export { default as Signup } from './Signup';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
