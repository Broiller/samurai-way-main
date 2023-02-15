import React from "react";
import s from "./Message.module.css";

export const Message = (props: any) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        // @ts-ignore
        let text = newMessageElement.current?.value
    alert(text)
    }
    return (
        <div>
            <div className={s.dialog}>{props.message}

            </div>
        </div>
    )
}
