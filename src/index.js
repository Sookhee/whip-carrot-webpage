import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <StrictMode>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root'));

serviceWorker.unregister();
