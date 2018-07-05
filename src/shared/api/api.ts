import { from, Observable } from 'rxjs';
import Message, { DogData } from "../models/message";
import { ipcRenderer } from "electron";

export const fetchDog = (): Observable<DogData> => {
  return from(fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json()))

};

export const fetchMessage = (): Promise<Message> => {
  return new Promise((resolve) => {
    ipcRenderer.send('async-message');
    ipcRenderer.on('async-reply', (event: Event, message: Message) => 
      resolve(message));
  });
};