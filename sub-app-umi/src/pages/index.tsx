import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  const say = () => {
    React.$mainOrSubStore.dispatch({ type: 'MODIFY', payload: { sex: 'maleUmi' } })
  }
  return (
    <div>
      <h1 className={styles.title} onClick={say}>【sub-app-umi】Page index</h1>
      <Link to="/list">Go To List</Link>
      <Link to="/detail">Go To Detail</Link>
    </div>
  );
}
