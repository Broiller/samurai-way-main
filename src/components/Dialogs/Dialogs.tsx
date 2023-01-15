import React from "react";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " +s.active}>
                    mama
                </div>
                <div className={s.dialog}>
                    papa
                </div>
                <div className={s.dialog}>
                    ya
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>hi</div>
                <div className={s.dialog}>lol</div>
                <div className={s.dialog}>kek</div>
            </div>
        </div>
    )
}