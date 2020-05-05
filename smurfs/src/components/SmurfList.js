import React from 'react'
import { connect } from 'react-redux'

import { getNewSmurfs} from '../actions/getNewSmurfs'

const SmurfList = (props) => {
    return(
        <div>
            <h2>THE SMURFS:</h2>
            <button onClick={props.getNewSmurfs}>Show all Smurfs</button>

            {props.smurfs.map((smurf, i) => {
               return ( 
                   <div key={i}>
                        <p>NAME: {smurf.name}</p>
                        <p>AGE: {smurf.age}</p>
                        <p>HEIGHT:{smurf.height} </p>
                    </div> 
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(
    mapStateToProps,
    {getNewSmurfs}
)(SmurfList)