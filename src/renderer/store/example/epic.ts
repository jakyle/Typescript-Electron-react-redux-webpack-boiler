import { types, ApiCallRequest, MessageCallRequest, InitialStateRequest, ExampleState, SaveStatePost } from "./types";
import Message, { DogData } from "../../../shared/models/message";
import { apiCallSuccess, apiCallFail, messageCallSuccess, messageCallFail } from "./action";
import { fetchDog, fetchMessage, fetchInitialState, postExampleState } from "../../../shared/api/api";
import {  mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, combineEpics, StateObservable } from 'redux-observable';
import { of } from "rxjs/internal/observable/of";
import { from } from 'rxjs/internal/observable/from';
import { initialStateSuccess } from "./action";
import { ApplicationState } from "..";

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
);

export const fetchInitialStateEpic = (action$: ActionsObservable<InitialStateRequest> ) => action$.pipe(
  ofType(types.INITIAL_STATE_REQUEST),
  mergeMap(() => 
    fetchInitialState().pipe(
      map((res: ExampleState) => initialStateSuccess(res)),
      catchError((err: any) => of(messageCallFail(err)))
    )
  )
);

export const saveStateEpic = (action$: ActionsObservable<SaveStatePost>, state$: StateObservable<ApplicationState> ) => action$.pipe(
  ofType(types.SAVE_STATE_POST),
  withLatestFrom(state$),
  mergeMap(([action, state]) => 
    postExampleState(state.example)
  )
);

export const exampleEpics = combineEpics(
  fetchInitialStateEpic,
  fetchMessageEpic,
  fetchDogEpic,
  saveStateEpic
)