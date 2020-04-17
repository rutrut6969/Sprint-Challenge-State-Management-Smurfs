import axios from 'axios';

export const showForm = () => {
  return (dispatch) => {
    dispatch({ type: 'Show_Form' });
  };
};
export const hideForm = (smurf) => {
  return (dispatch) => {
    dispatch({ type: 'Hide_Form' });
    axios.post('http://localhost:3333/smurfs', smurf);
  };
};
