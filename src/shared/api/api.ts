import { from, Observable } from 'rxjs';
import Message, { DogData } from "../models/message";
import { ipcRenderer } from "electron";
import { ExampleState } from '../../renderer/store/example/types';

export const fetchDog = (): Observable<DogData> =>
  from<DogData>(fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json()))

export const fetchMessage = (): Observable<Message> => 
  new Observable((subscriber) => {
    ipcRenderer.send('async-message');
    ipcRenderer.once('async-reply', (event: Event, message: Message) => 
      subscriber.next(message));
  });


export const fetchInitialState = (): Observable<ExampleState> => {
  return new Observable(subscriber => {
    console.log('fetching state...')
    ipcRenderer.send('saved-state')
    ipcRenderer.on('state-reply', (event: Event, state: ExampleState) => {
      subscriber.next(state)
    })
  })
}

export const postExampleState = (state: ExampleState): Observable<any> => {
  return new Observable(subscriber => {
    ipcRenderer.send('post-state', state)
  })
}