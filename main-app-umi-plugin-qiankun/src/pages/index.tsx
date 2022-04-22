import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage(props = {}) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <Link to="/home">home</Link><span>&nbsp;&nbsp;&nbsp;</span>
      <Link to="/sun">sun</Link><span>&nbsp;&nbsp;&nbsp;</span>
      <Link to="/sub-app-umi">umi</Link>

      <h1>以下是子应用</h1>

      <div id='appRoot'>
        { props.children }
      </div>
    </div>
  );
}
