import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import subStore from './store'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function render(props) {
  const { container } = props;
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? `/${props.name}` : '/'}>
      <App/>
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});

  // 挂载到全局 react 上
  React.$mainOrSubStore = subStore
}

export async function bootstrap(props) {
  console.log('【sub-app-react】 bootstrap', props);
}

export async function mount(props) {
  console.log('【sub-app-react】 mount', props.mainStore.getState());
  props.onGlobalStateChange((state)=>{
    console.log('【sub-app-react】onGlobalStateChange', state.getState())
  })
  render(props);

  // 挂载到全局 react 上
  React.$mainOrSubStore = props.mainStore
}

export async function unmount(props) {
  console.log('【sub-app-react】 unmount', props);
  const { container } = props;
  try {
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
  } catch (error) {}
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
