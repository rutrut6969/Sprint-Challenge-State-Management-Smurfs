const initialState = {
  smurfs: [],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Fetch_Smurf_Data':
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
