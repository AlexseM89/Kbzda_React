import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts=(props)=>{
    return(
                <div>My posts
                    <div>
                        <textarea></textarea>
                        <button>Add post</button>
                        </div>
                    <div className={classes.posts}>
                       <Post message="Hi how are you?" like="15"/>
                       <Post message="It is my first post" like="253"/>
                       <Post/>
                       <Post/>
                       <Post/>
                       <Post/>
                </div></div>
    )
}

export default MyPosts