import {useState} from "react";
import styled from "styled-components";

export const PasswordInput = ({value, onChange, placeholder='placeholder text...'}) => {

    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const inputType = isHiddenPassword ? 'text' : 'password'

    return (
        <div>
            <input type={inputType} value={value} onChange={onChange} placeholder={placeholder}/>
            <button onClick={() => setIsHiddenPassword(!isHiddenPassword)}>(O)</button>
        </div>
    );
};

const PasswordContainer = styled.div``