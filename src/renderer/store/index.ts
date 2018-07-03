import { 
  combineReducers,  
  createStore, 
  Store,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware  from "redux-saga";
import exampleReducer  from './example/reducer';
import { ExampleState } from './example/types';
import { all } from 'redux-saga/effects';
import { requestDogSaga, requestMessageSaga } from './example/saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ipcRenderer, Event } from 'electron';

export const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  example: ExampleState;
}
export const rootReducer = combineReducers<ApplicationState>({
  example: exampleReducer
});

export function* rootSaga() {
  yield all([
    requestDogSaga(),
    requestMessageSaga(),
  ])
}

const fetchState = (): Promise<ApplicationState> => {
  return new Promise(resolve => {
    ipcRenderer.send('saved-state')
    ipcRenderer.on('state-reply', (event: Event, state: ApplicationState) => {
      resolve(state)
    })
  })
}

let initialState: ApplicationState;

(async function() {
  initialState = await fetchState();
})()

export const store: Store<ApplicationState> = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

ipcRenderer.on('request-state', (event: Event) => {
  const state = store.getState();
  ipcRenderer.send('response-state', state);
})
