import { useEffect } from "react";
import { store } from "../store";
import type { Reducer } from "@reduxjs/toolkit";

export const useInjectReducer = (key: string, reducer: Reducer) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (store as any).injectReducer(key, reducer);
  }, [key, reducer]);
};
