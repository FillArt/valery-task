import {useState} from "react";

import {Modal} from "@/features/modal/Modal.jsx";
import {Button} from "@/shared/ui/Button.jsx";
import {PasswordInput} from "@/features/pasword/PasswordInput.jsx";

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                {isModalOpen ? (
                    <Modal title="Modal title" onClose={() => setIsModalOpen(false)}>
                        <p>Hello World!</p>
                        <PasswordInput value={password} onChange={setPassword}/>
                    </Modal>
                ) : (
                    <Button title="Show modal" onClick={() => setIsModalOpen(true)}/>
                )}
            </div>
        </>
    );
};