import axios from 'axios'

import{
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS, 
    FETCHING_SMURFS_ERROR
}  from '../actions'

export const getNewSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log("TESTING THE API",res)
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err =>
        dispatch({ type: FETCHING_SMURFS_ERROR, payload: err.response })
      )
}

