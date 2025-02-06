import classes from "./Profile.module.css"

const Profile=()=>{
    return<div className="content">
                <div>
                    <img src="https://wallpapers.com/images/hd/1200x480-pink-eclipse-8oc867idlp81x9ox.jpg"></img>
                </div>
                <div>
                    ava+description
                    <img src=""></img>
                </div>
                <div>
                    My posts<div>New post</div>
                    <div className={classes.posts}>
                        <div className={classes.item}>post 1</div>
                        <div className={classes.item}>post 2</div>
                        <div className={classes.item}>post 3</div>
                    </div>
                </div>
            </div>
}

export default Profile