import React from 'react';
import subStore from './store'

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('【sub-app-umi】 bootstrap', props);

    // 脱离主应用独立部署
    if (!props) {
      React.$mainOrSubStore = subStore;
    }
  },

  // 应用 render 之前触发
  async mount(props) {
    console.log('【sub-app-umi】 mount', props.mainStore.getState());
    props.onGlobalStateChange((state)=>{
      console.log('【sub-app-umi】onGlobalStateChange', state.getState())
    })

    // 挂载到全局 react 上
    React.$mainOrSubStore = props.mainStore;
  },

  // 应用卸载之后触发
  async unmount(props) {
    console.log('【sub-app-umi】 unmount', props);
  },
}
