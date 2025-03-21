import {useState} from "react";

export const PasswordInput = ({value, onChange, placeholder='placeholder text...'}) => {

    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const inputType = isHiddenPassword ? 'text' : 'password'

    return (
        <div>
            <input type={inputType} value={value} onChange={onChange} placeholder={placeholder}/>
            <button>(O)</button>
        </div>
    );
};