import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function Header() {

    return (
        <>
            <div className="myHeader">
            <input className="search__box" placeholder="Search Task by Title"/>
            <div>
                <Link to="/todo/add" className="btn btn-success task__button">New Task</Link>
            </div>
            <div className="date__field">
            <input type="date" id="birthday" name="birthday" />
            </div>
            </div>
        </>
    )
}

export default Header
