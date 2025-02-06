import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

const App = () => {
    return (
        <div>
            <div>
                <Header />
                <Technologies />
            </div>
        </div>
    );
};
const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    );
};
const Technologies = () => {
    return (
        <div>
            <ul>
                <li>cssT</li>
                <li>htmlT</li>
                <li>jsT</li>
                <li>ReactT</li>
            </ul>
        </div>
    );
};

export default App;
