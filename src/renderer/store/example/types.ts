import { Action } from 'redux';
import Message from '../../../models/message';

// all of my types for Cart action/reducer
export enum types {
  INCREMENT_NUMBER = '@@example/INCREMENT_NUMBER',
  DECREMENT_NUMBER = '@@example/DECREMENT_NUMBER',
  API_CALL_REQUEST = '@@example/API_CALL_REQUEST',
  API_CALL_SUCCESS = '@@example/API_CALL_SUCCESS',
  API_CALL_FAIL = '@@example/API_CALL_FAIL',
  MESSAGE_CALL_REQUEST = '@@example/MESSAGE_CALL_REQUEST',
  MESSAGE_CALL_SUCCESS = '@@example/MESSAGE_CALL_SUCCESS',
  MESSAGE_CALL_FAIL = '@@example/MESSAGE_CALL_FAIL'
}
// interfaces for actions, notice that I am importing Actions from redux, this is just
// extra boilerplate to help keep my code extra typesafe.
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
    message: string
  }
}

export interface MessageCallFail extends Action {
  type: types.MESSAGE_CALL_FAIL;
  payload: { 
    error: any
  }
}


// this is my board action, this will be exported to my reducers for the switch statement.
export type ExampleActions =
  | IncrementNumber
  | DecrementNumber
  | ApiCallRequest
  | ApiCallSuccess
  | ApiCallFail
  | MessageCallRequest
  | MessageCallSuccess
  | MessageCallFail

// this is the contract for my Carts state, the initial state
// will be defined in the actual reducer.
export interface ExampleState {
  number: number
  apiError: string
  dog: string
  message: Message
  messageError: any
  fetching: boolean
}
