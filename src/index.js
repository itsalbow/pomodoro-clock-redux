import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './core/store';

import App from './core';

const node = document.getElementById('app');

render(
	<Provider store={store}>
		<App />
	</Provider>
,node);
