import {
  takeLatest,
  call,
  put,
  CallEffect,
  PutEffect,
  ForkEffect
} from "redux-saga/effects";

import { types, ApiCallSuccess, ApiCallFail, ApiCallRequest, MessageCallRequest } from "./types";
import Message, { DogData } from "../../../shared/models/message";
import { apiCallSuccess, apiCallFail, messageCallSuccess, messageCallFail } from "./action";
import { fetchDog, fetchMessage } from "../../../shared/api/api";
import {  mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';
import { of } from "rxjs/internal/observable/of";
import { from } from 'rxjs';

export function* watchDogSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(types.API_CALL_REQUEST, requestDog);
};

export function* requestDog(): IterableIterator<CallEffect | PutEffect<ApiCallSuccess> | PutEffect<ApiCallFail>> {
  try {
    const res: DogData = yield call(fetchDog); 
    yield put(apiCallSuccess(res.message));
  } 
  catch (error) {
    yield put(apiCallFail(error))
  }
};

export function* watchMessageSaga(): IterableIterator<ForkEffect> {
  yield takeLatest(types.MESSAGE_CALL_REQUEST, requestMessage)
};

export function* requestMessage() {
  try {
    const message: Message = yield call(fetchMessage);
    yield put(messageCallSuccess(message))
  } 
  catch(error) {
    yield put(messageCallFail(error));
  }
};

export const fetchDogEpic = (action$: ActionsObservable<ApiCallRequest> ) => action$.pipe(
  ofType(types.API_CALL_REQUEST),
  mergeMap(() =>
    fetchDog().pipe(
      map((response: DogData) => apiCallSuccess(response.message)),
      catchError((err: string) => of(apiCallFail(err))),
    )
  )
);

export const fetchMessageEpic = (action$: ActionsObservable<MessageCallRequest> ) => action$.pipe(
  ofType(types.MESSAGE_CALL_REQUEST),
  mergeMap(() => 
  from(fetchMessage()).pipe(
    map((res: Message) => messageCallSuccess(res)),
    catchError((err: any) => of(messageCallFail(err)))
    )
  )
)