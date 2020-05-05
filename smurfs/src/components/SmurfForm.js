import React, {useState} from 'react';
import {connect} from 'react-redux'

import {submitSmurfs} from '../actions/submitSmurfs'
import xios from 'axios';

function SmurfForm (props) {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
      })

      console.log('smurf from form', smurf);

      const handleChange = e => {
          setSmurf({...smurf, [e.target.name]: e.target.value })
      }

      const handleSubmit = e => {
          e.preventDefault()
          submitSmurfs(e)
                            //submits new state
          setSmurf({        //resets the form after user submit
            name: '',
            age: '',
            height: ''
          })
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
                <button>Add</button>
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