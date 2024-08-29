import { create } from "zustand"

type zustandCountStoreStateType = {
    zustandCount: number;
    zustandCountUp: () => void;
}

const useZustandCountStore = create<zustandCountStoreStateType>()((set) => ({
    zustandCount: 0,
    zustandCountUp: () => set((state) => ({
        zustandCount: state.zustandCount + 1,
    })),
}))

export { useZustandCountStore }