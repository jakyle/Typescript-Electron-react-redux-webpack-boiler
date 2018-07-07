import * as actions from "../../../../src/renderer/store/example/action";
import { types } from "../../../../src/renderer/store/example/types";
import Message from "../../../../src/shared/models/message";

describe('example actions', () => {
  it('should create an action to increment a number', () => {
    const expectedAction = {
      type: types.INCREMENT_NUMBER,
      payload: { },
    }

    expect(actions.incrementNumber()).toEqual(expectedAction);
  });

  it('should create an action to decrement a number', () => {
    const expectedAction = {
      type: types.DECREMENT_NUMBER,
      payload: { },
    }

    expect(actions.decrementNumber()).toEqual(expectedAction);
  });

  it('should create an action to make an api request', () => {
    const expectedAction = {
      type: types.API_CALL_REQUEST,
      payload: { },
    }

    expect(actions.apiCallRequest()).toEqual(expectedAction);
  })

  it('should make an action for a successful api call', () => {
    const dog: string = 'https://images.dog.ceo/breeds/husky/n02110185_11396.jpg'; 
    const expectedAction = {
      type: types.API_CALL_SUCCESS,
      payload: {
        dog
      }
    }

    expect(actions.apiCallSuccess(dog)).toEqual(expectedAction);
  })

  it('should make an action for a failed api call', () => {
    const error = 'error';
    const expectedAction = {
      type: types.API_CALL_FAIL,
      payload: {
        error
      }
    }

    expect(actions.apiCallFail(error)).toEqual(expectedAction);
  })

  it('should make an action for a message request', () => {
    const expectedAction = {
      type: types.MESSAGE_CALL_REQUEST,
      payload: { }
    }

    expect(actions.messageCallRequest()).toEqual(expectedAction);
  })

  it('should make an action for a successful message', () => {
    const message: Message = {
      content: 'message',
      sender: 'James',
      isSent:  true
    };
    const expectedAction = {
      type: types.MESSAGE_CALL_SUCCESS,
      payload: { message }
    }

    expect(actions.messageCallSuccess(message)).toEqual(expectedAction);
  })

  it('should make an action for a failed message', () => {
    const error = 'error';
    const expectedAction = {
      type: types.MESSAGE_CALL_FAIL,
      payload: { error }
    }

    expect(actions.messageCallFail(error)).toEqual(expectedAction);
  })
})