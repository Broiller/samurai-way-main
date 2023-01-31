import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Serrings/Settings";


const App = (props:any) => {


    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.messagesPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}
                           />}/>
                    {/*<Route path='/music' render={() => <Music/>}/>*/}
                    {/*<Route path='/news' render={() => <News/>}/>*/}
                    {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                    {/*<Route path='/friends' render={() => <Friends/>}/>*/}
                </div>
            </div>

    )
}

export default App;
