import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { hideForm } from '../store/actions/forActions';
function FormData(props) {
  const handleChanges = (e) => {
    e.preventDefault();
    props.setSmurf({
      ...props.smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.hideForm(props.smurf);
  };

  return (
    <>
      <form className='addSmurf' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input
            type='name'
            name='name'
            value={props.smurf.name}
            onChange={handleChanges}
          />
        </label>

        <label htmlFor='age'>
          Age:
          <input
            type='number'
            name='age'
            value={props.smurf.age}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='height'>
          Height:
          <input
            type='text'
            name='height'
            value={props.smurf.height}
            onChange={handleChanges}
          />
        </label>
        <button className='submit'>Add Villager!</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.formReducer.formActive,
  };
};
export default connect(mapStateToProps, { hideForm })(FormData);
