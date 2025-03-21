import {useState} from "react";

import {Modal} from "@/features/modal/Modal.jsx";
import {Button} from "@/shared/ui/Button.jsx";

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                {isModalOpen ? (
                    <Modal title="Modal title" onClose={() => setIsModalOpen(false)}>
                        There will be an input here
                    </Modal>
                ) : (
                    <Button title="Show modal" onClick={() => setIsModalOpen(true)}/>
                )}
            </div>
        </>
    );
};