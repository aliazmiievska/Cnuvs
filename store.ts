import { create } from 'zustand'

interface BearState {
  bears: number
  increase: () => void
  decrease: () => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
}))


// import { useBearStore } from './store'

// const BearCounter = () => {
//   const { bears, increase, decrease } = useBearStore()
//   return (
//     <div>
//       <h1>Bears: {bears}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   )
// }

// export default BearCounter
