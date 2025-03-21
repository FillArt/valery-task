import {useState} from "react";

import {Modal} from "../../../features/modal/Modal.jsx";
import {Button} from "../../../shared/ui/Button.jsx";

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                {isModalOpen ? (
                    <Modal title="Тестовое задание" onClose={() => setIsModalOpen(false)}>
                        Какая-то информация
                    </Modal>
                ) : (
                    <Button title="Покажи модалку" onClick={() => setIsModalOpen(true)}/>
                )}
            </div>
        </>
    );
};