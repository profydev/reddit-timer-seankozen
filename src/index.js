import React from 'react';
import { render } from 'react-dom';
import App from './App';

// CSS style sheets
import './styles/normalize.css';
import './styles/global.css';

const rootElement = document.getElementById('root');
// eslint-disable-next-line react/jsx-filename-extension
render(<App />, rootElement);
