import React from 'react';
import s from './Post.module.css'
const Post = () => {
    return (
                    <div className={s.item}>
                        <img src='https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png' alt='d'/>
                        post 1
                        <div>
                            <span>like</span>
                        </div>
                    </div>
    );
}

export default Post;