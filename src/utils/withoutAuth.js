import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const withoutAuth = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem('token');

            if (token) {
                alert('이미 로그인된 상태입니다');
                navigate('/');  // 이미 로그인된 상태라면 메인 페이지 혹은 다른 페이지로 리디렉션
            }
        }, [navigate]);

        // 로그아웃 상태일 경우에만 래핑된 컴포넌트를 렌더링
        return <WrappedComponent {...props} />;
    };
};

export default withoutAuth;
