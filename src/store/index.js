import { create } from "zustand";
import { devtools } from "zustand/middleware";
//import { immer } from "zustand/middleware/immer";
import { createMetadataSlice } from "./metadata/metadataSlice";

const isDevEnv = import.meta.env.DEV;



// GLOBAL STATE
const storeGlobalOnly = (...set) => ({
  ...createMetadataSlice(...set),
});


export const useGlobalStoreOnly = create()(
  devtools(storeGlobalOnly, {
    enabled: isDevEnv,
    anonymousActionType: "internal state",
  })
);
