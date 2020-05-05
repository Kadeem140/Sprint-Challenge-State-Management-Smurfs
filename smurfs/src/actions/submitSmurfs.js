import axios from 'axios'

export const SUBMIT_SMURF_START = 'SUBMIT_SMURF_START'
export const SUBMIT_SMURF_SUCCESS = 'SUBMIT_SMURF_SUCCESS'
export const SUBMIT_SMURF_ERROR = 'SUBMIT_SMURF_ERROR'



export const submitSmurfs = (smurf) => dispatch => {
    return (dispatch) => {
      dispatch({ type: SUBMIT_SMURF_START })
      axios
        .post(
          'http://localhost:3333/smurfs', smurf)
        .then((res) => {
          console.log('res POST',res)
          dispatch({ type: SUBMIT_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err) => {
          dispatch({ type: SUBMIT_SMURF_ERROR, payload: err.response })
        })
    }
  }