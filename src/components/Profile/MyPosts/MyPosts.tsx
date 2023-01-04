import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are yoa?' likesCount='55'/>
                    <Post message="It's my first post" likesCount='15'/>
                </div>
            </div>
    );
}

export default MyPosts;