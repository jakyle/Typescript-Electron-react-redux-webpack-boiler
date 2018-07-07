import { Action } from 'redux';
import Message from '../../../shared/models/message';

export enum types {
  SAVE_STATE_POST = '@@example/SAVE_STATE_POST',
  INITIAL_STATE_REQUEST = '@@example/INITIAL_STATE_REQUEST',
  INITIAL_STATE_SUCCESS = '@@example/INITIAL_STATE_SUCCESS',
  INTIIAL_STATE_FAIL = '@@example/INITIAL_STATE_FAIL',
  INCREMENT_NUMBER = '@@example/INCREMENT_NUMBER',
  DECREMENT_NUMBER = '@@example/DECREMENT_NUMBER',
  API_CALL_REQUEST = '@@example/API_CALL_REQUEST',
  API_CALL_SUCCESS = '@@example/API_CALL_SUCCESS',
  API_CALL_FAIL = '@@example/API_CALL_FAIL',
  MESSAGE_CALL_REQUEST = '@@example/MESSAGE_CALL_REQUEST',
  MESSAGE_CALL_SUCCESS = '@@example/MESSAGE_CALL_SUCCESS',
  MESSAGE_CALL_FAIL = '@@example/MESSAGE_CALL_FAIL',
  DEFAULT = '@@default/DEFAULT',
}

export interface SaveStatePost extends Action {
  type: types.SAVE_STATE_POST;
  payload: { };
}

export interface InitialStateRequest extends Action {
  type: types.INITIAL_STATE_REQUEST;
  payload: { };
}
export interface InitialStateSuccess extends Action {
  type: types.INITIAL_STATE_SUCCESS;
  payload: { 
    state: ExampleState
  };
}

export interface InitialStateFail extends Action {
  type: types.INTIIAL_STATE_FAIL;
  payload: {
    error: any
  }
}
export interface IncrementNumber extends Action {
  type: types.INCREMENT_NUMBER;
  payload: { };
}

export interface DecrementNumber extends Action {
  type: types.DECREMENT_NUMBER;
  payload: { };
}

export interface ApiCallRequest extends Action {
  type: types.API_CALL_REQUEST;
  payload: { };
}

export interface ApiCallSuccess extends Action {
  type: types.API_CALL_SUCCESS;
  payload: { 
    dog: string 
  }
}

export interface ApiCallFail extends Action {
  type: types.API_CALL_FAIL;
  payload: {
    error: string
  }
}

export interface MessageCallRequest extends Action {
  type: types.MESSAGE_CALL_REQUEST;
  payload: { }
}

export interface MessageCallSuccess extends Action {
  type: types.MESSAGE_CALL_SUCCESS;
  payload: { 
    message: Message
  }
}

export interface MessageCallFail extends Action {
  type: types.MESSAGE_CALL_FAIL;
  payload: { 
    error: any
  }
}

export type ExampleActions =
  | SaveStatePost
  | InitialStateRequest
  | InitialStateSuccess
  | InitialStateFail
  | IncrementNumber
  | DecrementNumber
  | ApiCallRequest
  | ApiCallSuccess
  | ApiCallFail
  | MessageCallRequest
  | MessageCallSuccess
  | MessageCallFail

export interface ExampleState {
  number: number
  apiError: string
  dog: string
  message: Message
  messageError: any
  fetching: boolean
  fetchingStateError: any
}
