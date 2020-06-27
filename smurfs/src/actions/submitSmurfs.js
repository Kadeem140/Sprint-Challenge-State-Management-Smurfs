import axios from 'axios'

import{
    SUBMIT_SMURF_START,
    SUBMIT_SMURF_SUCCESS,
    SUBMIT_SMURF_ERROR
}  from '../actions'

export const submitSmurfs = (smurf) => dispatch => {
        console.log("IT WORKED")
        dispatch({ type: SUBMIT_SMURF_START })
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log('res POST',res)
                dispatch({ type: SUBMIT_SMURF_SUCCESS, payload: res.data })
                })
            .catch(err => {
                dispatch({ type: SUBMIT_SMURF_ERROR, payload: err.response })
            })
}
