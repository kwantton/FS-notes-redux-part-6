const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const good = action.payload.good          
      return {
        ...state, 
        good : good + 1
      }                                         
    case 'OK':
      const ok = action.payload.ok
      return {
        ...state, 
        ok : ok + 1
      }
    case 'BAD':
      const bad = action.payload.bad
      return {
        ...state,
        bad : bad + 1
      }
    case 'ZERO':
      return initialState
    default: return initialState // I suppose this is also called if the case is unknown (something that's not defined here?)
  }
  
}

export default counterReducer
