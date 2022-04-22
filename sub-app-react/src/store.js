import { createStore } from 'redux'

const initState = { id: 2, name: 'react' }

function reducer(state = initState, action) {
  const payload = Object.prototype.toString.call(action.payload) === '[object Object]' ? action.payload : {}
  const prevState = JSON.stringify(state)
  const afterState = JSON.stringify({ ...state, ...payload })

  if (prevState === afterState) {
    return state
  }

  switch (action.type) {
    case 'MODIFY':
      return { ...state, ...payload }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  let stateStr = JSON.stringify(store.getState())
  if (store.currState !== stateStr) {
    store.currState = stateStr
    console.log('【sub-app-react】subStoreChange', store.getState())
  }
})

export default store
