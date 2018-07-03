import { ipcMain, Event } from 'electron';
import Message from '../models/message';
import store from 'electron-store';
import { electronStore } from './main';
import { defaultState } from './initialState';

ipcMain.on('async-message', (event: Event) => {
  const message: Message = { 
    content: 'suh dude', 
    sender: 'Jimmy', 
    isSent: true 
  };
  event.sender.send('async-reply', message);
})

ipcMain.on('saved-state', (event: Event) => {
  const state = electronStore.get('app-state', defaultState)
  event.sender.send('state-reply', state)
})