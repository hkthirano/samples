import { useState } from "react";
import Child2_1 from "./Child2_1";
import Child2_2 from "./Child2_2";

type Child1Props = {
    count: number
}

const Child1 = (props: Child1Props) => {
    const [chidl1count, setChidl1count] = useState(0);

    const onClickCount = () => {
        setChidl1count(chidl1count + 1);
    }

    console.log('Child 1 render');

    return (
        <div style={{ margin: '8px', padding: '8px', border: '1px solid black' }}>

            <h1>Child 1</h1>

            <p>App Count: {props.count}</p>

            <button onClick={onClickCount}>
                useStateで状態を管理しているChild 1 Countを更新
            </button>

            <p>Child 1 Count: {chidl1count}</p>

            <Child2_1 count={chidl1count} />

            <Child2_2 />
        </div>
    )
}

export default Child1;