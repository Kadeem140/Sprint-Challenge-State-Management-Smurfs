import{
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS, 
    FETCHING_SMURFS_ERROR,
    SUBMIT_SMURF_START,
    SUBMIT_SMURF_SUCCESS,
    SUBMIT_SMURF_ERROR
}  from '../actions'



const initialState = {
    smurfs: [],
    isFetchingSmurfs: false,
    isSubmitting: false,
    error: ''
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCHING_SMURFS_START:
            return{
                ...state,
                smurfs: [],
                isFetchingSmurfs: true,
                error: ''
            }
        case FETCHING_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetchingSmurfs: false,
                error: ''
            }  
        case FETCHING_SMURFS_ERROR:
            return{
                ...state,
                isFetchingSmurfs: false,
                error: 'There was an Error fecthing your Data :('
            } 
        case SUBMIT_SMURF_START:
            return {
                ...state,
                smurfs: [],
                isSubmitting: true,
                error: ''
            }
        case SUBMIT_SMURF_SUCCESS:
            return {
            ...state,
            smurfs: [...state.smurfs, action.payload],
            isSubmitting: false,
            error: ''
        }
        case SUBMIT_SMURF_ERROR:
            return {
            ...state,
            isSubmitting: false,
            error: 'There was an Error submitting your Data :('
        }
        default: 
            return state        
    }
}