import React, {useState} from 'react';
import {connect} from 'react-redux'

import {submitSmurfs} from '../actions/submitSmurfs'

function SmurfForm ({submitSmurfs}) {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
      })
      console.log('smurf from form', smurf);

      const handleChange = e => {
          setSmurf({...smurf, [e.target.name]: e.target.value })
      };

      const handleSubmit = e => {
          e.preventDefault();
          return smurf.name === "" || smurf.age === "" || smurf.height === "" //if the form is empty return null
          ? null : submitSmurfs(smurf)  //if not submit new state
          
      }
      return (
          <div>
            <h2>REGISTER NEW SMURF HERE:</h2>
            <form onSubmit={handleSubmit}>
                <label>NAME:</label>
                <input
                    type='text'
                    value={smurf.name}
                    name='name'
                    onChange={handleChange}
                />
                <label>AGE:</label>
                <input
                    type='text'
                    value={smurf.age}
                    name='age'
                    onChange={handleChange}
                />
                <label>HEIGHT:</label>
                <input
                    type='text'
                    value={smurf.height}
                    name='height'
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
          </div>
      )
}

const mapStateToProps = (state) => {
    return {
        smurfs : state.smurfs //maps over smurfs in our state and assigns it
    }                         // to what we assign as a key
}

export default connect(
    mapStateToProps,
    { submitSmurfs}
)(SmurfForm)