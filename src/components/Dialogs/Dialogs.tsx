import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Mama" id="1"/>
                <DialogItem name="Papa" id="2"/>
                <DialogItem name="I" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="HI"/>
                <Message message="lol"/>
                <Message message="kek"/>
            </div>
        </div>
    )
}