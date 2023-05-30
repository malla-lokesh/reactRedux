import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import centralStore from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={centralStore}>
    <App />
</Provider>);
