import {ModalDialog} from "./ModalDialog.jsx";
import {ModalBackground} from "./ModalBackground.jsx";
import {useEffect} from "react";

export const Modal = ({children, title, onClose}) => {

    useEffect(() => {
        const handleEscPress = (event) => {
            if (event.key === "Escape") { onClose(); }
        };
        document.addEventListener("keydown", handleEscPress);

        return () => {
            document.removeEventListener("keydown", handleEscPress);
        };
    }, [onClose]);

    return (
        <ModalBackground onClose={onClose}>
            <ModalDialog title={title} onClose={onClose}>
                {children}
            </ModalDialog>
        </ModalBackground>
    );
};