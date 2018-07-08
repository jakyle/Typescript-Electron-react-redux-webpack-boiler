import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, epicMiddleware, rootEpic } from './store';
import { MemoryRouter as Router} from 'react-router-dom';
import Pathing from './components/pathing/Pathing';
// import App from './containers/app';
import './styles.scss';

epicMiddleware.run(rootEpic);

const app = <Provider store={store}><Router><Pathing /></Router></Provider>

ReactDOM.render(app, document.getElementById('root'));