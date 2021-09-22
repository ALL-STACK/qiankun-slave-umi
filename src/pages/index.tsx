import { useEffect, useState } from 'react';
import { Pagination, Button } from 'antd';
import { useModel, connectMaster } from 'umi';
import styles from './index.less';

function IndexPage(props) {

  // const { sharedStore, sharedStore: { fetchGlobalData, getGlobal } } = props;
    
  function handleClick() {
    const { getDvaApp, count, setCount } = props;
    if (!getDvaApp) return;
    const _dispatch = getDvaApp()._store.dispatch;
    setCount && setCount(count + 1)
    _dispatch({
      type: 'global/changeCount',
      payload: { count: count + 1 }
    })
  }

  return (
    <div>
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
      <h1>{props.count ?? 0}</h1>
      <Button type="primary" onClick={handleClick}>点击</Button>
      <h1 className={styles.title}>应用一</h1>
    </div>
  );
}

export default connectMaster(IndexPage);