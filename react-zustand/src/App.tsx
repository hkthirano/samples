// 開発環境では2回、本番環境では1回レンダリングされる

import { createContext, useState } from "react";
import Child1 from "./components/Child1";

export const GloblCountContext = createContext<any>({});

const App = () => {
  const [count, setCount] = useState(0);
  var count2 = 0;
  const [globalCount, setGlobalCount] = useState(0);

  const onClickCount = () => {
    console.log('onClickCount');
    setCount(count + 1);
  }

  const onClickCount2 = () => {
    count2 = count2 + 1;
    console.log('onClickCount2:', count2);
  }

  console.log('App render');

  return (
    <GloblCountContext.Provider value={{ globalCount: globalCount, setGlobalCount: setGlobalCount }}>
      <div style={{ margin: '8px', padding: '8px', border: '1px solid black' }}>

        <h1>App</h1>

        <button onClick={onClickCount}>
          useStateで状態を管理しているcountを更新
        </button>

        <p>count: {count}</p>

        <button onClick={onClickCount2}>
          素のJSのcount2を更新
        </button>

        <p>count2: {count2}</p>

        <Child1 count={count} />
      </div>
    </GloblCountContext.Provider >
  );
}

export default App;
