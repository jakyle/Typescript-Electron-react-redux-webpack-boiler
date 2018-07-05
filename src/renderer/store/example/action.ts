import { ActionCreator } from 'redux';
// ActionCreator is an interface used to help keep my actions more typesafe. I just set the
// type of each of my actions as an actioncreator type with the action as the generic
// being passed in.  I also use the types and the interfaces from my typefles
// here to add definitions here to also stay type safe.
import {
  types,
  IncrementNumber,
  DecrementNumber,
  ApiCallRequest,
  ApiCallSuccess,
  ApiCallFail,
  MessageCallRequest,
  MessageCallSuccess,
  MessageCallFail,
} from './types';
import Message from '../../../shared/models/message';

// I like to pass in empty objects as payloads in case I end up changing the definition for
// my actions.  if I do this the payload section will be clear to me what its for, any
// parameters that I pass into the function will be ultimately passed into the payload
// property of this object.
export const incrementNumber = (): IncrementNumber => ({
  type: types.INCREMENT_NUMBER,
  payload: { },
});

export const decrementNumber = (): DecrementNumber => ({
  type: types.DECREMENT_NUMBER,
  payload: { },
});

export const apiCallRequest = (): ApiCallRequest => ({
  type: types.API_CALL_REQUEST,
  payload: { },
});

export const apiCallSuccess = (dog: string): ApiCallSuccess => ({
  type: types.API_CALL_SUCCESS,
  payload: { 
    dog 
  },
});

export const apiCallFail = (error: string): ApiCallFail => ({
  type: types.API_CALL_FAIL,
  payload: { 
    error 
  }
});

export const messageCallRequest = (): MessageCallRequest => ({
  type: types.MESSAGE_CALL_REQUEST,
  payload: { }
});

export const messageCallSuccess = (message: Message): MessageCallSuccess => ({
  type: types.MESSAGE_CALL_SUCCESS,
  payload: { 
    message
  }
});

export const messageCallFail = (error: any): MessageCallFail => ({
  type: types.MESSAGE_CALL_FAIL,
  payload: {
    error
  }
});