import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem('token');

            if (!token) {
                alert('로그인이 필요합니다');
                navigate('/signin');
            }
        }, [navigate]);

        // 인증이 성공하면 래핑된 컴포넌트를 렌더링
        return <WrappedComponent {...props} />;
    };
};

// 로그아웃 함수 추가
export const logout = (navigate) => {
    localStorage.removeItem('token');  // 토큰 제거
    alert('로그아웃 되었습니다');
    navigate('/signin');  // 로그인 페이지로 리디렉션
};


export default withAuth;
