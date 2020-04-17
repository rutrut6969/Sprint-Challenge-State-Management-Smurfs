import axios from 'axios';

export const fetchSmurfs = (smurfs) => {
  return (dispatch) => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => dispatch({ type: 'Fetch_Smurf_Data', payload: res.data }));
  };
};
