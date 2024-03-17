import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    const [text, setText] = useState('');

    const buttonClick = async () => {
        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        setText(data.data);
    }

    return (
        <MainPresenter
            text={text}

            buttonClick={buttonClick}
        />
    )
}

export default MainContainer;