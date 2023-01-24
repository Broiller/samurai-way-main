import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

