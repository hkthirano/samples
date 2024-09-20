import { useContext, useState } from "react";
import { GloblCountContext } from "../App";
import { useZustandCountStore } from "../store/zustandCountStore";

type Child2_1Props = {
    count: number
}

const Child2_1 = (props: Child2_1Props) => {
    const [chidl2count, setChidl2count] = useState(0);
    const { globalCount, setGlobalCount } = useContext(GloblCountContext)
    const zustandCount = useZustandCountStore((state) => state.zustandCount)
    const zustandCountUp = useZustandCountStore((state) => state.zustandCountUp)

    const onClickCount = () => {
        setChidl2count(chidl2count + 1);
    }

    const onClickGlobalCount = () => {
        setGlobalCount(globalCount + 1);
    }

    const onClickZustandCount = () => {
        zustandCountUp();
    }

    return (
        <div style={{ margin: '8px', padding: '8px', border: '1px solid black' }}>

            <h1>Child 2.1</h1>

            <p>Child 1 Count: {props.count}</p>

            <button onClick={onClickCount}>
                useStateで状態を管理しているChild 2.1 Countを更新
            </button>

            <p>Child 2.1 Count: {chidl2count}</p>

            {/* Contextを管理しているAppコンポネント以下の全てが再レンダリングされる */}
            <button onClick={onClickGlobalCount}>
                useContextで状態を管理しているGlobal Countを更新
            </button>

            <p>Globl Count: {globalCount}</p>

            {/* zustandCountを使用するChild2_1とChild2_2のみが再レンダリングされる */}
            <button onClick={onClickZustandCount}>
                Zustandで状態を管理しているZustand Countを更新
            </button>

            <p>Zustand Count: {zustandCount}</p>
        </div>
    )
}

export default Child2_1;