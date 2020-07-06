import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import './font/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <StrictMode>
        <ParallaxProvider>
            <BrowserRouter basename="/whip-carrot-webpage">
                <App/>
            </BrowserRouter>
        </ParallaxProvider>
    </StrictMode>,
    document.getElementById('root'));

serviceWorker.unregister();
