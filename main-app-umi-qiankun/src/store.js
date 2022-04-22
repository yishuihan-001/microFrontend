import { createStore } from 'redux'
import { actions } from '@/pages/index'

const initState = { id: 0, name: 'main' }

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
    actions.setGlobalState({modifyTimestamp: Date.now()})
  }
})

export default Object.assign(store, {modifyTimestamp: ''})
