import React from 'react';

import { createRoot } from 'react-dom/client';

// import ReactDOM from 'react-dom';     This only works for React17

import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
