import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux'
import { store, epicMiddleware, rootEpic } from './store';
import './style.scss';

epicMiddleware.run(rootEpic);

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('app'));
