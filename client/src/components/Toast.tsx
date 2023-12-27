import React, {useEffect, useMemo, useRef, useState} from "react";
import {ToastContext} from "../context/ToastContext";
import {IoIosCloseCircle} from "react-icons/io";
import { RiAlarmWarningLine } from "react-icons/ri";
import {FaCheck} from "react-icons/fa";
import {ToastType} from "../enums/toast";
import className from "classnames";

function useTimeout(callbackFunction: () => void) {
    const savedCallback = useRef(callbackFunction);

    useEffect(() => {
        savedCallback.current = callbackFunction;
    }, [callbackFunction])

    useEffect(() => {
        const functionId = setTimeout(() => savedCallback.current(), 3000);
        return () => clearTimeout(functionId);
    }, [])
}
interface ToastProps {
    message: string;
    close: () => void;
    type: ToastType;
}
const Toast: React.FC<ToastProps> = ({message, close, type}) => {
    const toastClasses = className(
        "backdrop-blur bg-white/30 dark:bg-black/30 rounded-md w-full md:w-[400px] py-2 px-2 border-l-8 shadow-md flex justify-between items-center duration-75 animate-slidein-toast",
        {
            "border-green-600": type === ToastType.Success,
            "border-orange-400": type === ToastType.Warning,
        }
    );
    const iconClasses = className(
        "p-2 rounded-full shadow",
        {
            "bg-green-600": type === ToastType.Success,
            "bg-orange-400": type === ToastType.Warning,
        }
    );
    let icon: React.ReactElement | null = null;
    let displayedMessage: string | null = null;

    switch (type) {
        case ToastType.Success:
            icon = <FaCheck className='text-indigo-50'/>;
            displayedMessage = 'Your word has been successfully added!';
            break;
        case ToastType.Warning:
            icon = <RiAlarmWarningLine className='text-indigo-50'/>;
            displayedMessage = 'You have already added this word.';
            break;
    }

    useTimeout(() => {
        close();
    });
    return <div className={toastClasses}>
        <div className='flex items-center gap-2 font-bold'>
            <div className={iconClasses}>
                {icon}
            </div>
            <p className='text-indigo-900 dark:text-indigo-50'>{displayedMessage}</p>
        </div>
        <button className='' onClick={close}><IoIosCloseCircle className='text-2xl text-indigo-900 dark:text-indigo-50'/></button>
    </div>
}

export default Toast;

interface ToastContextProviderProps {
    children: React.ReactElement;
}
type Toast = {
    message: string;
    id: string;
    type: ToastType;
}

export const ToastContextProvider: React.FC<ToastContextProviderProps>  = ({children}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    function openToast(message: string, type: ToastType) {
        const newToast = {
            // @FIXME use sth different for id generation
            id: (Math.random()).toString(),
            message,
            type,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);
    }
    function closeToast(id: string) {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }

    const contextValue = useMemo(() => ({
        open: openToast,
        close: closeToast,
    }), [])

    return (<ToastContext.Provider value={contextValue}>
        {children}
        <div className='fixed bottom-2 right-2 md:bottom-10 md:right-10 flex flex-col gap-2'>
            {toasts && toasts.map(toast => {
                return <Toast message={toast.message} key={toast.id} type={toast.type} close={() => closeToast(toast.id)}/>
            })}
        </div>
    </ToastContext.Provider>)
}