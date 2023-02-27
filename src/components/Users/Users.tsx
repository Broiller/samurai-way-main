import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if(props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t500x500.jpg',
            followed: false,
            fullName: "Dimych",
            status: "i aa a boss",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t500x500.jpg',
            followed: true,
            fullName: "Sasha",
            status: "i aa a boss too",
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://i1.sndcdn.com/avatars-vTz4Uz5gwRSMyG7U-B6a28A-t500x500.jpg',
            followed: false,
            fullName: "Andrew",
            status: "i aa a boss too",
            location: {city: 'Kiev', country: 'Ukraine'}
        }])}


    return <div>
        (

        {props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photoUrl} className={styles.userPhoto}/>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={() => {
                              props.unFollow(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                              props.follow(u.id)
                          }}>Follow</button>}
                  </div>
              </span>

            <span>
                  <span>
                      <div>{u.fullName}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{u.location.country}</div>
                      <div>{u.location.city}</div>
                  </span>
                </span>
        </div>)
        }
    </div>
}

export default Users