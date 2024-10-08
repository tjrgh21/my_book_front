import React, { useState, useEffect } from "react";
import './UserBox.css';

export const Userbox = (props) => {
    const { label, type, info, box_type, onSave, onEditClick } = props;
    const [inputValue, setInputValue] = useState(info);  // 입력 필드의 값
    const [isEditing, setIsEditing] = useState(false);    // 수정 모드 여부

    useEffect(() => {
        setInputValue(info); // 정보가 변경될 때 입력값 업데이트
    }, [info]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        if (onSave) {
            onSave();  // 부모 컴포넌트로 값 전달
        }
        setIsEditing(false);  // 수정 모드 비활성화
    };

    return (
        <div className="user-list">
            <label>{label}</label>
            <div className="user-but">
                {isEditing ? (
                    <>
                        <input
                            type={type}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSaveClick}><span>저장</span></button>
                    </>
                ) : (
                    <>
                        <input
                            type={type}
                            value={inputValue}
                            disabled
                        />
                        {box_type === "change" && (
                            <button onClick={() => {
                                setIsEditing(true);
                                if (onEditClick) onEditClick();  // 수정 버튼 클릭 시 이벤트 처리
                            }}><span>수정</span></button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
