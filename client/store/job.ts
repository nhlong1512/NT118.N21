import { UserCustom, JobCustom } from "./../model/model";
import { User } from "firebase/auth";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  jobs?: JobCustom[];
}

interface Action {
  setUser: (jobs: JobCustom[]) => void;
}

const useUserStore = create(
  immer<State & Action>((set) => ({
    setUser: (jobs) =>
      set((state) => {
        state.jobs = jobs;
      }),
  }))
);

export default useUserStore;
