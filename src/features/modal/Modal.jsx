import {ModalDialog} from "./ModalDialog.jsx";
import {ModalBackground} from "./ModalBackground.jsx";

export const Modal = ({children, title, onClose}) => {
    return (
        <ModalBackground onClose={onClose}>
            <ModalDialog title={title} onClose={onClose}>
                {children}
            </ModalDialog>
        </ModalBackground>
    );
};