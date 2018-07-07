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
  InitialStateRequest,
  InitialStateSuccess,
  ExampleState,
  SaveStatePost
} from './types';
import Message from '../../../shared/models/message';

export const saveStatePost = (): SaveStatePost => ({
  type: types.SAVE_STATE_POST,
  payload: { }
})
export const initialStateRequest = (): InitialStateRequest => ({
  type: types.INITIAL_STATE_REQUEST,
  payload: { }
})

export const initialStateSuccess = (state: ExampleState): InitialStateSuccess => ({
  type: types.INITIAL_STATE_SUCCESS,
  payload: { 
    state
  }
})
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