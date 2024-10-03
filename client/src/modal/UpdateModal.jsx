import { useEffect, useRef } from 'react'

export default function UpdateModal({isOpen, children}){
    const ref = useRef();
    useEffect(()=>{
        if(!isOpen){
            return;
        }

        const dialog = ref.current;
        dialog.showModal();

        return () => {
            dialog.close();
        }

    }, [isOpen]);

    return <dialog ref={ref} className=''>{children}</dialog>
}