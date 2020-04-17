import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../components/store/actions/smurfActions';
import { showForm } from '../components/store/actions/forActions';
import Form from './form/Form';
import Card from './Card';
import './App.css';
function App(props) {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: Date.now(),
  });

  useEffect(() => {
    props.fetchSmurfs();
  }, [smurf]);
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <button className='form btn' onClick={props.showForm}>
        Expand Village!
      </button>
      {props.form ? (
        <Form smurf={smurf} setSmurf={setSmurf} />
      ) : (
        <div className='card-wrap'>
          {props.smurfs.map((item) => (
            <Card key={item.id} smurf={item} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfReducer.smurfs,
    form: state.formReducer.formActive,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, showForm })(App);
