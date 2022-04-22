import FrameMain from '@/layout/FrameMain'
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  setDefaultMountApp,
  initGlobalState
} from "qiankun";
import { getMicroconfig } from "@/registerMicroAppsConfig";
import mainStore from '@/store'
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './index.less'
import ReactLoading from 'react-loading';


// 全局状态设为 mainStore
const actions = initGlobalState(mainStore);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('===> actions.onGlobalStateChange Before', prev);
  console.log('===> actions.onGlobalStateChange After', state);
});


// 注册微应用
registerMicroApps(getMicroconfig(mainStore), {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    console.log("Before Load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    console.log("After Mount", app.name);
    return Promise.resolve();
  },
});

// 启动 qiankun
start({
  prefetch: true, // 开启预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
  },
});

// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
  console.log("异常捕获", handler);
});

/**
 * 设置主应用启动后默认进入的微应用
 * 对应子应用的 activeRule
 */
// setDefaultMountApp('/sub-app-vue2');


// 设置 loading 状态
function triggerLoading (onLoading) {
  let dom = document.getElementById('rootSibling')
  if (!onLoading) {
    if (dom) {
      unmountComponentAtNode(dom)
      dom.remove()
    }
    return
  }

  if (!dom) {
    dom = document.createElement('div')
    dom.setAttribute('id', 'rootSibling')
    document.body.appendChild(dom)
  }

  ReactDOM.render(
    <ReactLoading type='spin' color='#597ef7' height={'80px'} width={'80px'} />,
    dom
  )
}


export default function (props) {
  return (
    <FrameMain>
      <div id="appRoot">{ props.children }</div>
    </FrameMain>
  );
}

export { actions, triggerLoading }

