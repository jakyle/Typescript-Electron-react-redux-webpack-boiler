import * as reducers from "../../../../src/renderer/store/example/reducer";
import { types, ExampleState, MessageCallRequest, ApiCallRequest, ApiCallSuccess, ApiCallFail, IncrementNumber, DecrementNumber, MessageCallSuccess, MessageCallFail } from "../../../../src/renderer/store/example/types";

describe('example reducer', () => {
  let state: ExampleState;
  beforeEach(() => {
    state = {
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
  })
  
  it('should update state for an api request', () => {
    const action: ApiCallRequest = {
      type: types.API_CALL_REQUEST,
      payload: { }
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: '',
      fetching: true,
      apiError: '',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: '',
    }
    expect(reducers.apiCallRequest(state, action)).toEqual(expectedState);
  });

  it('should update state for a successful api request', () => {
    const action: ApiCallSuccess = {
      type: types.API_CALL_SUCCESS,
      payload: { 
        dog: 'https://images.dog.ceo/breeds/husky/n02110185_11396.jpg'
      }
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: 'https://images.dog.ceo/breeds/husky/n02110185_11396.jpg',
      fetching: false,
      apiError: '',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: '',
    }
    expect(reducers.apiCallSuccess(state, action)).toEqual(expectedState);
  });

  it('should update state for a successful api request', () => {
    const action: ApiCallFail = {
      type: types.API_CALL_FAIL,
      payload: { 
        error: 'error'
      }
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: '',
      fetching: false,
      apiError: 'error',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: '',
    }
    expect(reducers.apiCallFail(state, action)).toEqual(expectedState);
  });

  it('should update state for an Increment state change, Increment number + 1', () => {
    const action: IncrementNumber = {
      type: types.INCREMENT_NUMBER,
      payload: { },
    }

    const expectedState: ExampleState = {
      number: 2,
      dog: '',
      fetching: false,
      apiError: '',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: '',
    }
    expect(reducers.incrementNumber(state, action)).toEqual(expectedState);
  });

  describe('should update state for an Decrement state change', () => {
      it('should Decrement number - 1', () => {
        const action: DecrementNumber = {
          type: types.DECREMENT_NUMBER,
          payload: { },
        }
    
        const expectedState: ExampleState = {
          number: 0,
          dog: '',
          fetching: false,
          apiError: '',
          message: {
            content: '',
            sender: '',
            isSent: false,
          },
          messageError: '',
        }
        expect(reducers.decrementNumber(state, action)).toEqual(expectedState);
      })

      it('should NOT Decrement number', () => {
        const action: DecrementNumber = {
          type: types.DECREMENT_NUMBER,
          payload: { },
        }
        
        state = {
          number: 0,
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
        const expectedState: ExampleState = {
          number: 0,
          dog: '',
          fetching: false,
          apiError: '',
          message: {
            content: '',
            sender: '',
            isSent: false,
          },
          messageError: '',
        }
        expect(reducers.decrementNumber(state, action)).toEqual(expectedState);
      })

  });

  it('should update state for message request', () => {
    const action: MessageCallRequest = {
      type: types.MESSAGE_CALL_REQUEST,
      payload: { },
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: '',
      fetching: true,
      apiError: '',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: '',
    }
    expect(reducers.messageCallRequest(state, action)).toEqual(expectedState);
  });

  it('should update state for a succesful message request', () => {
    const action: MessageCallSuccess = {
      type: types.MESSAGE_CALL_SUCCESS,
      payload: { 
        message: {
          content: 'message',
          sender: 'James',
          isSent:  true
        }
      }
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: '',
      fetching: false,
      apiError: '',
      message: {
        content: 'message',
        sender: 'James',
        isSent: true,
      },
      messageError: '',
    }
    expect(reducers.messageCallSuccess(state, action)).toEqual(expectedState);
  });

  it('should update state for a succesful message request', () => {
    const action: MessageCallFail = {
      type: types.MESSAGE_CALL_FAIL,
      payload: { error: 'error'}
    }

    const expectedState: ExampleState = {
      number: 1,
      dog: '',
      fetching: false,
      apiError: '',
      message: {
        content: '',
        sender: '',
        isSent: false,
      },
      messageError: 'error',
    }
    expect(reducers.messageCallFail(state, action)).toEqual(expectedState);
  });

  describe('example reducer switch function', () => {
    it('should incrementNumber', () => {
      const action = {
        type: types.INCREMENT_NUMBER,
        payload: { }
      }
  
      const expectedState: ExampleState = {
        number: 2,
        dog: '',
        fetching: false,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });
    
    it('should decrementNumber', () => {
      const action = {
        type: types.DECREMENT_NUMBER,
        payload: { }
      }
  
      const expectedState: ExampleState = {
        number: 0,
        dog: '',
        fetching: false,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });
    
    it('should apiCallRequest', () => {
      const action = {
        type: types.API_CALL_REQUEST,
        payload: { }
      }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: '',
        fetching: true,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });
    
    it('should apiCallSuccess', () => {
      const action = {
        type: types.API_CALL_SUCCESS,
        payload: {
          dog: 'https://images.dog.ceo/breeds/husky/n02110185_11396.jpg' 
        }
      }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: 'https://images.dog.ceo/breeds/husky/n02110185_11396.jpg',
        fetching: false,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });

    it('should apiCallFail', () => {
      const action = {
        type: types.API_CALL_FAIL,
        payload: {
          error: 'error' 
        }
      }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: '',
        fetching: false,
        apiError: 'error',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });

    it('should messageCallRequest', () => {
      const action = {
        type: types.MESSAGE_CALL_REQUEST,
        payload: { }
        }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: '',
        fetching: true,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });

    it('should messageCallSuccess', () => {
      const action = {
        type: types.MESSAGE_CALL_SUCCESS,
        payload: { 
          message: {
            content: 'suh dude',
            sender: 'jimmy',
            isSent: true,
          }
        }
      }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: '',
        fetching: false,
        apiError: '',
        message: {
          content: 'suh dude',
          sender: 'jimmy',
          isSent: true,
        },
        messageError: '',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });

    it('should messageCallFail', () => {
      const action = {
        type: types.MESSAGE_CALL_FAIL,
        payload: { 
          error: 'error' 
        }
      }
  
      const expectedState: ExampleState = {
        number: 1,
        dog: '',
        fetching: false,
        apiError: '',
        message: {
          content: '',
          sender: '',
          isSent: false,
        },
        messageError: 'error',
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });
    it('should return default state', () => {
      const action = {
        type: types.DEFAULT,
        payload: { }
        }
  
      const expectedState: ExampleState = {
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
      }
      expect(reducers.reducer(state, action)).toEqual(expectedState);
    });
  })

})