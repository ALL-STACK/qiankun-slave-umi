import { Pagination } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={total => `Total ${total} items`}
    />
      <h1 className={styles.title}>应用一</h1>
    </div>
  );
}
