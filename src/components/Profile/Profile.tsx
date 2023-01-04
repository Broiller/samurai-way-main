import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='a'/>
            <div>
                <img src="//" alt="w"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;