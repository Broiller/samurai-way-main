import React from "react";
import s from "./Message.module.css";

export const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}