import {
  takeLatest,
  call,
  put,
  CallEffect,
  PutEffect,
  ForkEffect
} from "redux-saga/effects";
import { ipcRenderer } from 'electron';

import { types, ApiCallSuccess, ApiCallFail } from "./types";
import Message, { DogData } from "../../../models/message";
import { apiCallSuccess, apiCallFail, messageCallSuccess, messageCallFail } from "./action";

export function* requestDogSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(types.API_CALL_REQUEST, requestDog);
};

const fetchDog = (): Promise<DogData> => {
  return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((responseJson) => responseJson)
};

function* requestDog(): IterableIterator<CallEffect | PutEffect<ApiCallSuccess> | PutEffect<ApiCallFail>> {
  try {
    const res: DogData = yield call(fetchDog); 
    yield put(apiCallSuccess(res.message));
  } 
  catch (error) {
    yield put(apiCallFail(error))
  }
};

export function* requestMessageSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(types.MESSAGE_CALL_REQUEST, requestMessage)
};

const fetchMessage = (): Promise<Message> => {
  return new Promise(resolve => {
    ipcRenderer.send('async-message');
    ipcRenderer.on('async-reply', (event: Event, message: Message) => 
      resolve(message));
  });
};

function* requestMessage() {
  try {
    const message: Message = yield call(fetchMessage);
    yield put(messageCallSuccess(message))
  } 
  catch(error) {
    yield put(messageCallFail(error));
  }
};


