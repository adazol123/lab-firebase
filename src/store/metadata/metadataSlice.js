export const initialState = {
  isAdminNavToggled: false,
};

export const createMetadataSlice = (set) => ({
  metadata: initialState,
  //inside react component setter
  setGeneral(payload) {
    set(
      (state) => ({
        ...state,
        metdata: {
          ...state.metdata,
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
