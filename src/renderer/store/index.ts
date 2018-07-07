import { 
  combineReducers,  
  createStore, 
  Store,
  applyMiddleware,
} from 'redux';
import exampleReducer  from './example/reducer';
import { ExampleState } from './example/types';
import { exampleEpics } from './example/epic';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ipcRenderer, Event } from 'electron';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';

export const epicMiddleware = createEpicMiddleware ();

export interface ApplicationState {
  example: ExampleState;
}

export const rootEpic = combineEpics(
  exampleEpics,
)
export const rootReducer = combineReducers<ApplicationState>({
  example: exampleReducer
});

export const store: Store<ApplicationState> = createStore(
  rootReducer, 
  /* initialState, */ 
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

ipcRenderer.on('request-state', (event: Event) => {
  const state = store.getState();
  ipcRenderer.send('response-state', state);
})
