import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>} />
                <Route path='/profile'
                       render={() => <Profile/>} />
                <Route path='/users'
                       render={() => <UsersContainer/>} />

                {/*<Route path='/music' render={() => <Music/>}/>*/}
                {/*<Route path='/news' render={() => <News/>}/>*/}
                {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                {/*<Route path='/friends' render={() => <Friends/>}/>*/}
            </div>
        </div>

    )
}

export default App;
