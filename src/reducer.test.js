import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING',
      payload: state      // oma
    }

    const newState = counterReducer(undefined, action) // "undefined" works, empty map works, initialState works
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    
    const action = {
      type: 'GOOD',
      payload: {
        ...initialState   // COPY, DON'T ALTER THE ORIGINAL! so with initialstate, which is 0 good, 0 bad, 0 ok, the result should be 1, 0, 0 afterwards
      }
    }
    const state = initialState

    deepFreeze(state) // ensures that initialState itself is not changed (HENCE THE ...initialState ABOVE!); that instead its altered COPY is returned
    const newState = counterReducer(state, action)  // so counterReducer takes the action, and since action.type == "GOOD", it will increment the state by 1 and return it here.
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    
    const action = {
      type: 'BAD',
      payload: {
        ...initialState   // COPY, DON'T ALTER THE ORIGINAL! so with initialstate, which is 0 good, 0 bad, 0 ok, the result should be 1, 0, 0 afterwards
      }
    }
    const state = initialState

    deepFreeze(state) // ensures that initialState itself is not changed (HENCE THE ...initialState ABOVE!); that instead its altered COPY is returned
    const newState = counterReducer(state, action)  // so counterReducer takes the action, and since action.type == "GOOD", it will increment the state by 1 and return it here.
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('ok is incremented', () => {
    
    const action = {
      type: 'OK',
      payload: {
        ...initialState   // COPY, DON'T ALTER THE ORIGINAL! so with initialstate, which is 0 good, 0 bad, 0 ok, the result should be 1, 0, 0 afterwards
      }
    }
    const state = initialState

    deepFreeze(state) // ensures that initialState itself is not changed (HENCE THE ...initialState ABOVE!); that instead its altered COPY is returned
    const newState = counterReducer(state, action)  // so counterReducer takes the action, and since action.type == "GOOD", it will increment the state by 1 and return it here.
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('is emptied properly', () => {
    
    const action = {
      type: 'OK',
      payload: {
        ...initialState   // COPY, DON'T ALTER THE ORIGINAL! so with initialstate, which is 0 good, 0 bad, 0 ok, the result should be 1, 0, 0 afterwards
      }
    }
    const state = initialState

    deepFreeze(state) // ensures that initialState itself is not changed (HENCE THE ...initialState ABOVE!); that instead its altered COPY is returned
    const newState = counterReducer(state, action)  // so counterReducer takes the action, and since action.type == "GOOD", it will increment the state by 1 and return it here.
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })

    const action2 = {
      type: 'ZERO',
      payload: {
        ...newState   // the payload doesn't really matter here since ZEROer of the reducer always returns good:0, ok:0, bad:0, no matter what the state input was
      }
    }

    deepFreeze(newState) // ensures that initialState itself is not changed (HENCE THE ...initialState ABOVE!); that instead its altered COPY is returned
    const newestState = counterReducer(newState, action2)  // so counterReducer takes the action, and since action.type == "GOOD", it will increment the state by 1 and return it here.
    expect(newestState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})