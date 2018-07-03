import { Reducer } from 'redux';
import { 
  types, 
  ExampleState, 
  ExampleActions, 
  IncrementNumber, 
  DecrementNumber, 
  ApiCallSuccess, 
  ApiCallFail, 
  ApiCallRequest, 
  MessageCallRequest,
  MessageCallSuccess,
  MessageCallFail
} from './types';
import { updateObject } from '../util';

const initialState: ExampleState = {
  number: 1,
  dog: '',
  fetching: false,
  apiError: '',
  message: {
    content: '',
    sender: '',
    isSent: false,
  },
  messageError: '',
};

const apiCallRequest = (state: ExampleState, action: ApiCallRequest): ExampleState => {
  return updateObject(state, { 
    fetching: true 
  });
};

const apiCallSuccess = (state: ExampleState, action: ApiCallSuccess): ExampleState => {
  return updateObject(state, { 
    dog: action.payload.dog, 
    apiError: '', 
    fetching: false 
  })
};

const apiCallFail = (state: ExampleState, action: ApiCallFail): ExampleState => {
  return updateObject(state, {
    apiError: action.payload.error, 
    dog: '', 
    fetching: false
  })
};

const incrementNumber = (state: ExampleState, action: IncrementNumber): ExampleState => { 
  return updateObject(state, { 
    number: state.number + 1 
  })
};

const decrementNumber = (state: ExampleState, action: DecrementNumber): ExampleState => {
  if(state.number == 0) {
    return updateObject(state, { 
      number: state.number 
    })
  }
  return updateObject(state, {
    number: state.number - 1
  })
};

const messageCallRequest = (state: ExampleState, action: MessageCallRequest): ExampleState => {
  return updateObject(state, {
    fetching: true,
  })
}

const messageCallSuccess = (state: ExampleState, action: MessageCallSuccess): ExampleState => {
  return updateObject(state, {
    fetching: false,
    message: action.payload.message,
    messageError: ''
  })
}

const messageCallFail = (state: ExampleState, action: MessageCallFail): ExampleState => {
  return updateObject(state, {
    fetching: false,
    messageError: action.payload.error,
    message: '',
  })
}

const reducer: Reducer<ExampleState> = (state: ExampleState = initialState, action: ExampleActions) => {
  switch (action.type) {
    case types.INCREMENT_NUMBER: return incrementNumber(state, action);
    case types.DECREMENT_NUMBER: return decrementNumber(state, action);
    case types.API_CALL_REQUEST: return apiCallRequest(state, action);
    case types.API_CALL_SUCCESS: return apiCallSuccess(state, action);
    case types.API_CALL_FAIL: return apiCallFail(state, action);
    case types.MESSAGE_CALL_REQUEST: return messageCallRequest(state, action);
    case types.MESSAGE_CALL_SUCCESS: return messageCallSuccess(state, action);
    case types.MESSAGE_CALL_FAIL: return messageCallFail(state, action);
    default: return state;
  }
};

export default reducer;
