import React from 'react'
import './style.css'
import Dummy from '../../images/dummy.jpeg'
import {Link} from 'react-router-dom'
import Filter from '../FilterTag/filter'
import LineGraph from '../LineGraph/LineGraph'

function SideBar() {
    return (
        <div>
        <div class="sidebar">
        <div className="propfile"> 
        <div className="profile__image">
        <img src={Dummy} className="image__logo"  width="50px"/>
        </div>
        <div className="profile__name">
            Kislay 
            <br />
            <p className="profile__website">kislay@todo.com</p>
        </div>
        </div>
        <div>
            <Filter />
        </div>
        <div className="profile__pie__chart">
            <LineGraph />
        </div>
        </div>
        </div>
    )
}

export default SideBar;