const initSubStore = (global) => {
  const initState = { id: 4, name: 'jq' }

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

  const store = global.Redux.createStore(reducer)

  store.subscribe(() => {
    let stateStr = JSON.stringify(store.getState())
    if (store.currState !== stateStr) {
      store.currState = stateStr
      console.log('【sub-app-jq】subStoreChange', store.getState())
    }
  })

  return store
}


const render = ($) => {
  $('#subAppJqContainer').html('Hello, render with jQuery in SubAppJq');

  const jq = document.getElementById('JQ')
  jq.addEventListener('click', function () {
    $.$mainOrSubStore.dispatch({ type: 'MODIFY', payload: { sex: 'maleJq' } })
  })

  return Promise.resolve();
};


((global) => {
  //sub-app-jq 是对应的微应用名称
  global['sub-app-jq'] = {
    bootstrap: (props) => {
      console.log('【sub-app-jq】 bootstrap', props);
      return Promise.resolve();
    },

    mount: (props) => {
      console.log('【sub-app-jq】 mount', props.mainStore.getState());
      props.onGlobalStateChange((state)=>{
        console.log('【sub-app-jq】onGlobalStateChange', state.getState())
      })

      // 挂载到全局 $ 上
      $.$mainOrSubStore = props.mainStore;
      clearTimeout(global.timerForSubAppJq)
      return render($);
    },

    unmount: (props) => {
      console.log('【sub-app-jq】 unmount', props);
      return Promise.resolve();
    },
  };

  global.timerForSubAppJq = setTimeout(() => {
    const subStore = initSubStore(global)
    $.$mainOrSubStore = subStore;
    render($)
  }, 1500)
})(window);