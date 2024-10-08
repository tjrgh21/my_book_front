import React, { useEffect, useState } from "react";
import { Layout } from "../../../../components/Layout/Layout";
import { Userbox } from "../../../../components/User/UserBox";
import { ButtonBox } from "../../../../components/Sign/ButtonBox";
import { logout } from "../../../../utils/withAuth";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MypageList = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        birthday: '',
        tel: '',
        email: '',
        pw: '',
        nickname: ''
    });

    const [originalUserInfo, setOriginalUserInfo] = useState({});
    const [editMode, setEditMode] = useState({
        name: false,
        tel: false,
        nickname: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        // 로컬 스토리지 또는 API에서 사용자 정보 가져오기
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
            setOriginalUserInfo(storedUserInfo); // 원래의 정보 백업
        }
    }, []);


    const handleLogout = () => {
        logout(navigate);
    };

    const handleEditClick = (field) => {
        setEditMode(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleSave = async (field) => {
        try {
            const updatedInfo = { [field]: userInfo[field] };
            const response = await axios.put('http://localhost:3333/updateUser', updatedInfo);
            console.log('수정 완료:', response.data);
            setOriginalUserInfo(prev => ({ ...prev, [field]: userInfo[field] }));
            setEditMode(prev => ({ ...prev, [field]: false }));
        } catch (error) {
            console.error('수정 중 오류 발생:', error);
            // 오류 발생 시 원래 정보로 복구
            setUserInfo(originalUserInfo);
            setEditMode(prev => ({ ...prev, [field]: false }));
        }
    };

    return(
        <Layout
            type = {'home'}
            title_name = {"MY"}
            main_contents = {
                <div className="user-container">
                    <div className="info-box">
                        <div className="info-box-name">
                            <span>기본정보</span>
                        </div>
                        <Userbox
                            box_type={editMode.name ? "save" : "change"}
                            label = {"이름"}
                            type = {'text'}
                            info = {userInfo.name}
                            onSave={editMode.name ? () => handleSave('name') : undefined}
                            onEditClick={() => handleEditClick('name')}
                        />

                        <Userbox
                            label = {"생년월일"}
                            type = {'text'}
                            info = {userInfo.birthday}
                        />

                        <Userbox
                            box_type={editMode.tel ? "save" : "change"}
                            label = {"휴대폰 번호"}
                            type = {'text'}
                            info = {userInfo.tel}
                            onSave={editMode.tel ? () => handleSave('tel') : undefined}
                            onEditClick={() => handleEditClick('tel')}
                        />
                    </div>

                    <div className="info-box">
                        <div className="info-box-name">
                            <span>가입정보</span>
                        </div>
                        <Userbox
                            label = {"아이디(이메일)"}
                            type = {'text'}
                            info = {userInfo.email}
                        />
                        <Userbox
                            label = {"비밀번호"}
                            type = {'password'}
                            info = {userInfo.pw}
                        />
                        <Userbox
                            box_type={editMode.nickname ? "save" : "change"}
                            label = {"닉네임"}
                            type = {'text'}
                            info = {userInfo.nickname}
                            onSave={editMode.nickname ? () => handleSave('nickname') : undefined}
                            onEditClick={() => handleEditClick('nickname')}
                        />
                        <div className="Logout-BtnBox">
                        <ButtonBox
                            title={"로그아웃"}
                            onClick = {handleLogout}
                        />
                        </div>
                    </div>

                    
                </div>
            }
        />
    )
}

export default MypageList;