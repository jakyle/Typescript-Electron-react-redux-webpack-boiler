import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux'
import { store, sagaMiddleware, rootSaga } from './store';
import './style.scss';
import { ipcRenderer, Event } from 'electron';

sagaMiddleware.run(rootSaga);

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('app'));
