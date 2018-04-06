import React, { Component } from 'react';
import Authenticator from '../components/authenticator';
import tater from '../images/tater.png';
// import ViewNotesBtn from '../components/viewNotesBtn';
// import CreateNewNote from '../components/createNoteBtn';

class LeftRail extends Component {
    render() {
        return (
            <div className="left-rail">
                <Authenticator />
                <h1 className="left-rail__title">
                    My Note-
                    <img className="logo" src={tater} />
                </h1>
            </div>
        )   
    }
}


export default LeftRail;