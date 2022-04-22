import { Empty, Typography } from 'antd';
import { Link, connectMaster } from 'umi';

const { Title } = Typography;

function DetailPage(props) {
  console.log('【sub-app-umi】 DetailPage props', props)
  return (
    <>
      <Empty />
      <Title>【sub-app-umi】Page detail</Title>
      <div>{JSON.stringify(props.masterState)}</div>
      <h3><button onClick={() => props.setMasterState(state => ({...state, name: 'slient'}))}>触发 setMasterState</button></h3>
      <Link to="/">Go To Index</Link>
      <Link to="/list">Go To List</Link>
    </>
  );
}

export default connectMaster(DetailPage)

