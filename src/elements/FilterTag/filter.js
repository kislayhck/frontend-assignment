import React from 'react'
import {useDispatch} from 'react-redux'
import {getPersonalTask,geMiscellaneousTask,getofficialTask} 
from '../../actions/todoAction'
import './style.css'

function Filter() {
    const dispatch = useDispatch();

    return (
        <div className="filter__box">
            <div className="filter__bar" onClick={() => dispatch(getPersonalTask("personal"))}>Personal</div>
            <div className="filter__bar" onClick={() => dispatch(geMiscellaneousTask("official"))}>official</div>
            <div className="filter__bar" onClick={() => dispatch(getofficialTask("miscellaneous"))}>Miscellaneous</div>
        </div>
    )
}

export default Filter
