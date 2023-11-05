import { Socket } from "socket.io-client";

export const initialState = {
  isAdminNavToggled: false,
  heartbeat: {},
  stocks: [],
  socket: Socket
};

export const createMetadataSlice = (set) => ({
  metadata: initialState,
  //inside react component setter
  dispatchMetadata(payload) {
    set(
      (state) => ({
        ...state,
        metadata: {
          ...state.metadata,
          ...payload,
        },
      }),
      false,
      {
        type: "metadata/set",
        payload: payload,
      }
    );
  },

  //inside react component unsetter
  unsetGeneral() {
    set(
      () => ({
        metadata: initialState,
      }),
      false,
      {
        type: "metadata/unset",
      }
    );
  },
});
