import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import "./App.css";
import React, { Component } from "react";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
        </div>
    );
};

export default App;
