import "./public-path";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import subStore from '@/store'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

let router = null;
let instance = null;

function render (props = {}) {
  const { container } = props;
  router = new VueRouter({
    // 注意这里的name,最好不要写死，直接使用主应用传过来的name
    base: window.__POWERED_BY_QIANKUN__ ? `/${props.name}` : "/",
    mode: "history",
    routes,
  });

  Vue.use(VueRouter);
  
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();

  // 挂载到全局 instance 上
  Vue.prototype.$mainOrSubStore = subStore;
}

export async function bootstrap(props) {
  console.log('【sub-app-vue2】 bootstrap', props);
}

export async function mount(props) {
  console.log('【sub-app-vue2】 mount', props.mainStore.getState());
  props.onGlobalStateChange((state)=>{
    console.log('【sub-app-vue2】onGlobalStateChange', state.getState())
  })

  render(props);

  // 挂载到全局 instance 上
  Vue.prototype.$mainOrSubStore = props.mainStore;
}

export async function unmount(props) {
  console.log('【sub-app-vue2】 unmount', props);
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
