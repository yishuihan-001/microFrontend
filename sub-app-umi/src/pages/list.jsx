import { List, Typography, Divider } from 'antd';
import { Link } from 'umi';

const { Title } = Typography;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default function ListPage() {
  return (
    <>
      <Divider orientation="left">Default Size</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
      <Divider orientation="left">More Large Size</Divider>
      <Title>【sub-app-umi】Page list</Title>
      <Link to="/">Go To index</Link>
      <Link to="/detail">Go To Detail</Link>
    </>
  );
}
