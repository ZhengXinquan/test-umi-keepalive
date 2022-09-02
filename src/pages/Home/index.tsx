import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, KeepAlive } from '@umijs/max';
import { useState } from 'react';
import styles from './index.less';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const { name } = useModel('global');
  return (
    <div>
      <h1>useModel.global.name : {name}</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <KeepAlive>
        <Counter />
      </KeepAlive>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
