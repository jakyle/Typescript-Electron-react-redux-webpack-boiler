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

// I like to pass in empty objects as payloads in case I end up changing the definition for
// my actions.  if I do this the payload section will be clear to me what its for, any
// parameters that I pass into the function will be ultimately passed into the payload
// property of this object.
export const incrementNumber: ActionCreator<IncrementNumber> = () => ({
  type: types.INCREMENT_NUMBER,
  payload: { },
});

export const decrementNumber: ActionCreator<DecrementNumber> = () => ({
  type: types.DECREMENT_NUMBER,
  payload: { },
});

export const apiCallRequest: ActionCreator<ApiCallRequest> = () => ({
  type: types.API_CALL_REQUEST,
  payload: { },
});

export const apiCallSuccess: ActionCreator<ApiCallSuccess> = (dog: string) => ({
  type: types.API_CALL_SUCCESS,
  payload: { 
    dog 
  },
});

export const apiCallFail: ActionCreator<ApiCallFail> = (error: string) => ({
  type: types.API_CALL_FAIL,
  payload: { 
    error 
  }
});

export const messageCallRequest: ActionCreator<MessageCallRequest> = () => ({
  type: types.MESSAGE_CALL_REQUEST,
  payload: { }
});

export const messageCallSuccess: ActionCreator<MessageCallSuccess> = (message: string) => ({
  type: types.MESSAGE_CALL_SUCCESS,
  payload: { 
    message
  }
});

export const messageCallFail: ActionCreator<MessageCallFail> = (error: any) => ({
  type: types.MESSAGE_CALL_FAIL,
  payload: {
    error
  }
});