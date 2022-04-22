import { triggerLoading } from '@/pages/index'

const loader = (loading) => {
  // 此处可以获取微应用是否加载成功,可以用来触发全局的 loading
  console.log("loading", loading);
  triggerLoading(loading)
};

export const getMicroconfig = (mainStore) => [
  //name: 微应用的名称,
  //entry: 微应用的入口,
  //container: 微应用的容器节点的选择器或者 Element 实例,
  //activeRule: 激活微应用的规则(可以匹配到微应用的路由),
  //loader: 加载微应用的状态 true | false
  {
    name: "sub-app-vue2",
    entry: "http://localhost:8001",
    container: "#appRoot",
    activeRule: "/sub-app-vue2",
    props: { mainStore },
    loader,
  },
  {
    name: "sub-app-react",
    entry: "http://localhost:8002",
    container: "#appRoot",
    activeRule: "/sub-app-react",
    props: { mainStore },
    loader,
  },
  {
    name: "sub-app-umi",
    entry: "http://localhost:8003",
    container: "#appRoot",
    activeRule: "/sub-app-umi",
    props: { mainStore },
    loader,
  },
  {
    name: "sub-app-jq",
    entry: "http://localhost:8004",
    container: "#appRoot",
    activeRule: "/sub-app-jq",
    props: { mainStore },
    loader,
  },
];
