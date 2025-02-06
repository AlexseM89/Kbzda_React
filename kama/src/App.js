import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://i.pinimg.com/736x/c6/80/c9/c680c9681ca3cdc09a19877a04640cca.jpg" />
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://wallpapers.com/images/hd/3d-waterfall-1920-x-1280-wallpaper-h3mefn9cnkbhgzb8.jpg"></img>
                </div>
                <div>
                    ava+description
                    <img src="https://a.d-cd.net/49ffb3u-960.jpg"></img>
                </div>
                <div>
                    My posts<div>New post</div>
                    <div>post 1</div>
                    <div>post 1</div>
                </div>
            </div>
        </div>
    );
};

export default App;
