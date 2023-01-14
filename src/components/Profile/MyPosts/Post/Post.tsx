import React from 'react';
import s from './Post.module.css'
const Post = (props: any) => {

    return (
                    <div className={s.item}>
                        <img src='https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png' alt='avatar'/>
                        {props.message}
                        <div>
                            <span>like</span> {props.likesCount}
                        </div>
                    </div>
    );
}

export default Post;