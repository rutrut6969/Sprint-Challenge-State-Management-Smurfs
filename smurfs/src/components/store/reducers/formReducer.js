const initialState = {
  formActive: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Show_Form':
      return {
        ...state,
        formActive: true,
      };
    case 'Hide_Form':
      return {
        ...state,
        formActive: false,
      };
    default:
      return state;
  }
};
