import { useEffect, useState } from "react"
import './Toast.css'

const Toast = ({message, type = 'info', short = true, onClose}) => {
    const duration = short ? 3000 : 5000 
    // 2 standard duration if you whant to change change in css as well.
    // Types there is (info, success and error) add more in css.

    useEffect(() => {

        const timer = setTimeout(() => {

            onClose();
        }, duration)
        return () => clearTimeout(timer);
    }, [duration, onClose])

    return(
        <div className={`toast toast-${type} ${short ? 'toast-short' : 'toast-long'}`  }>
            <p>{message}</p>
        </div>
    )
}

export default Toast;
