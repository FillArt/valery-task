import {Modal} from "../../../features/modal/Modal.jsx";
import {useState} from "react";

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    return (
        <>
            {isModalOpen && (
                <Modal title="Тестовое задание" onClose={() => setIsModalOpen(false)}>
                    Какая-то информация
                </Modal>
            )}

        </>
    );
};