import React from "react";
import './Sign.css'

export const InputBox = (props) => {
    const {label, type, placeholder, value, onChange} = props

    return(
        <div className="Sign-Block">
                        <div className="uInputArea">
                            <div className="col">
                                <div className="uInput">
                                    <label>{label}</label>
                                    <div className="inputBox">
                                        <input className="InputText" type={type} placeholder={placeholder} value={value} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
    )
}