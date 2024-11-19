import { useState } from "react";

const LoginAlert = ({children, onClose})=>{
    const [alert, setAlert] = useState(false);

    const handleClose = ()=>{
        setAlert(!alert);
        onClose();
    }
    
   return(
    <>
        {!alert ? <div className="fixed inset-0 flex justify-center items-center bg-slate-950 bg-opacity-75">
        <dialog className="flex justify-center items-center bg-slate-50 bg-opacity-75 h-48 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md relative">
            <span className="absolute top-2 right-2 cursor-pointer text-gray-700 hover:text-red-500 text-xl sm:text-2xl md:text-3xl" onClick={handleClose}>
                &times;
            </span>
            <p className="text-gray-900 text-sm sm:text-base md:text-lg">{children}</p>
        </dialog>
    </div> : null}
    </>
   )
}


export default LoginAlert;