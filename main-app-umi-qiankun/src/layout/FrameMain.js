import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { history, useLocation } from 'umi';
import style from './FrameMain.less'

const { Header, Content, Footer } = Layout;
const items = [
  {name: '主应用', key: 'main'},
  {name: 'vue2 子应用', key: 'vue2'},
  {name: 'react 子应用', key: 'react'},
  {name: 'umi 子应用', key: 'umi'},
  {name: 'jq 子应用', key: 'jq'},
]

function FrameMain (props) {
  let pathname = location.pathname.split('/')[1]
  if (pathname.indexOf('sub-app-') > -1) {
    pathname = pathname.substr(8)
  } else {
    pathname = 'main'
  }
  const [current, setCurrent] = useState(pathname);

  const onClick = (e) => {
    setCurrent(e.key);
    const comeBackMainApp = e.key === 'main'
    history.push(comeBackMainApp ? '/main/first' : `/sub-app-${e.key}`)
    if (comeBackMainApp) {
      setImmediate(() => {
        location.reload()
      })
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className={style.header}>
          <h1 className={style.header__title}>MicroApp</h1>
          <div className={style.header__middle}>
            <Menu
              mode="horizontal"
              selectedKeys={[current]}
              onClick={onClick}
            >
              {items.map(it => <Menu.Item key={it.key}>{it.name}</Menu.Item>)}
            </Menu>
          </div>
          <div className={style.header__user}>张三</div>
        </div>
      </Header>

      <Content>
        <div className={style['site-layout-content']}>{ props.children }</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default FrameMain
