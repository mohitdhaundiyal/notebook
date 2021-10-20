import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NoteState from './components/context/notes/NoteState';


export default function App() {
    return (
        <NoteState>
            <Router>
                <div className="App">
                    <Navbar />
                </div>
                <div className="container my-3">
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </NoteState>
    )
}
