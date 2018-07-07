import { ipcMain, Event } from 'electron';
import store from 'electron-store';
import { electronStore } from './main';
import Message from '../shared/models/message';
import { ExampleState } from '../renderer/store/example/types';

ipcMain.on('async-message', (event: Event) => {
  const messages: Message[] = [
    {
      content: 'hey man whats up',
      sender: 'mr. sender',
      isSent: true,
    }, 
    {
      content: 'did you know tee hee?',
      sender: 'curious boy',
      isSent: true,
    },
    {
      content: 'suh dude', 
      sender: 'Jimmy', 
      isSent: true 
    }
  ];
  event.sender.send('async-reply', messages[Math.floor(Math.random() * messages.length)]);
})

ipcMain.on('saved-state', (event: Event) => {
  const state = electronStore.get('example-state')
  event.sender.send('state-reply', state)
})

ipcMain.on('post-state', (event: Event, state: ExampleState) => {
  electronStore.set('example-state', state)
})