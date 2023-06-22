import { UserCustom } from './../model/model';
import { User } from 'firebase/auth'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  user?: UserCustom
}

interface Action {
  setUser: (user: UserCustom) => void
  logOut: () => void
}

const useUserStore = create(
  immer<State & Action>((set) => ({
    setUser: (user) =>
      set((state) => {
        state.user = user
      }),
    logOut: () => {
      set((state) => {
        state.user = undefined
      })
    }
  }))
)

export default useUserStore
