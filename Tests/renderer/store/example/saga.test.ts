import { watchDogSaga, requestDog } from "../../../../src/renderer/store/example/epic";
import { ForkEffect, take, fork } from "redux-saga/effects";
import { types } from "../../../../src/renderer/store/example/types";

describe('My Saga', function() {
	let iterator: IterableIterator<ForkEffect>;
  let actualYield;
  let expectedYield;
  const fakeAction = { type: types.API_CALL_REQUEST };
  
  beforeEach(() => {
	  iterator = watchDogSaga();
  });
  
  // `takeEvery` first does a `TAKE` on the action you give it
  it('should take on the API_CALL_REQUEST action', () => {
    actualYield = iterator.next().value;
    expectedYield = take(types.API_CALL_REQUEST);
    expect(actualYield).toEqual(expectedYield);
  });
  
  // It then does `FORK` on the handler you gave it
  it('should fork the saga handler with the action', () => {
  
  	// The saga is now waiting for a `TAKE` action, so we send a fake on through.
  	actualYield = iterator.next(fakeAction).value;
    expectedYield = fork(requestDog);
    expect(actualYield).toEqual(expectedYield);
  });
  
  // Ihen loops back around to start doing `TAKE` actions again
  // and continues indefinitely in this cycle.
  it('should return to capturing the GET_DATA action', () => {
	  actualYield = iterator.next().value;
    expectedYield = take(types.API_CALL_REQUEST);
    expect(actualYield).toEqual(expectedYield);
  });
});