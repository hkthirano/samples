import { useContext } from "react";
import { GloblCountContext } from "../App";
import { useZustandCountStore } from "../store/zustandCountStore";

const Child2_2 = () => {
    console.log('Child 2.2 render');

    const { globalCount, setGlobalCount } = useContext(GloblCountContext)

    const onClickGlobalCount = () => {
        setGlobalCount(globalCount + 1);
    }

    const zustandCount = useZustandCountStore((state) => state.zustandCount)
    const zustandCountUp = useZustandCountStore((state) => state.zustandCountUp)

    const onClickZustandCount = () => {
        zustandCountUp();
    }

    return (
        <div style={{ margin: '8px', padding: '8px', border: '1px solid black' }}>

            <h1>Child 2.2</h1>

            <button onClick={onClickGlobalCount}>
                useContextで状態を管理しているGlobal Countを更新
            </button>

            <p>Globl Count: {globalCount}</p>

            <button onClick={onClickZustandCount}>
                Zustandで状態を管理しているZustand Countを更新
            </button>

            <p>Zustand Count: {zustandCount}</p>
        </div>
    )
}

export default Child2_2;