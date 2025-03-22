import {useEffect, useRef, useState} from "react";
import styled from "styled-components";

import EyeIcon from "./assets/eye.svg"
import EyeIconSlash from "./assets/eye-slash.svg"


export const PasswordInput = ({value, onChange, placeholder='enter text here...'}) => {

    const [isHiddenPassword, setIsHiddenPassword] = useState(true)
    const inputType = isHiddenPassword ? 'password' : 'text'
    const eyeIcon = isHiddenPassword ?  EyeIcon : EyeIconSlash
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus();

        return () => {
            onChange('')
            setIsHiddenPassword(true)
        };
    }, []);

    const onChangeHandler = (e) => onChange(e.currentTarget.value)

    return (
        <PasswordContainer>
            <input ref={inputRef} type={inputType} value={value} onChange={onChangeHandler} placeholder={placeholder}/>
            <button onClick={() => setIsHiddenPassword(!isHiddenPassword)}>
                <img src={eyeIcon} alt="Toggle visibility"/>
            </button>
        </PasswordContainer>
    );
};

const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid blue;

    &:focus-within {
        outline: 3px solid skyblue;
    }
    
    input {
        border: none;
        flex: 1;
        padding: 0 20px 0 0;
        &:focus {
            outline: none;
        }
    }
    button {
        background: none;
        display: inherit;
        align-items: inherit;
        border: none;
        width: 20px;
        height: 20px;
        img {
            width: 20px;
            height: 20px;
        }
    }
`

