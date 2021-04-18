import React from 'react'
import ProfileSection from './profileSection'
import './style.css'

function MainBoard() {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2 profile__section__left">
                <ProfileSection />
            </div>
        </div>
        </div>
    )
}

export default MainBoard
