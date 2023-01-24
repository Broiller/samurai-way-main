import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ]

    let messages = [
        {id: 1, message: "lol"},
        {id: 2, message: "kek"},
        {id: 3, message: "yo"},
        {id: 4, message: "hi"},
        {id: 5, message: "how"},
        {id: 6, message: "psss"}
    ]

    let dialogsElement = dialogs.map(d =><DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m =><Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}