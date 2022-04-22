import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';

const { Sider, Content } = Layout;
const items = [
  {name: 'first', key: 'first'},
  {name: 'second', key: 'second'},
]

export default function (props) {
  const [current, setCurrent] = useState('first');

  const onClick = (e) => {
    setCurrent(e.key);
    history.push(`/main/${e.key}`)
  };

  return (
    <Layout>
      <Sider>
        <Menu
          mode="vertical"
          selectedKeys={[current]}
          onClick={onClick}
        >
          {items.map(it => <Menu.Item key={it.key}>{it.name}</Menu.Item>)}
        </Menu>
      </Sider>
      <Layout>
        <Content>{ props.children }</Content>
      </Layout>
    </Layout>
  )
}
