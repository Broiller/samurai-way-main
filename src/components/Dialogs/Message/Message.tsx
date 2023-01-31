import React from "react";
import s from "./Message.module.css";

export const Message = (props: any) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        // @ts-ignore
        let text = newMessageElement.current.value
    alert(text)
    }
    // @ts-ignore
    return (
        <div>
            <div className={s.dialog}>{props.message}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>send message</button>
                </div>
            </div>
        </div>
    )
}
