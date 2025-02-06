import MyPosts from "./MyPosts/MyPosts"
import classes from "./Profile.module.css"

const Profile=()=>{
    return<div className={classes.content}>
                <div>
                    <img src="https://wallpapers.com/images/hd/1200x480-pink-eclipse-8oc867idlp81x9ox.jpg"></img>
                </div>
                <div>
                    ava+description
                    <img src=""></img>
                </div>
                <MyPosts/>
            </div>
}

export default Profile