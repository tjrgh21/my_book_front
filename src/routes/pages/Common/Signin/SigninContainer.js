import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { SigninPresenter } from "./SigninPresenter";
import withoutAuth from "../../../../utils/withoutAuth";

const SigninContainer = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        pw: '',
    });

    const navigate = useNavigate();

    const Signin = async () => {

        const { email, pw } = userInfo;

        // if (!email.length) {
        //     alert('아이디(이메일)을 입력해주세요!');
        //     return;
        // }

        // if (!pw.length) {
        //     alert('비밀번호를 입력해주세요!');
        //     return;
        // }

        try {
            const result = await fetch('http://localhost:3333/signin', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    Accept: 'application/json',
                    mode: 'no-cors',
                    'Access-Control-Allow-Origin': '*',
                },
                // 입력 정보마다 state를 만든 것과 달리 하나의 객채로 관리하면 데이터 전송도 편리해진다.
                // (SignIn과 차이점을 비교하기 바람)
                body: JSON.stringify({
                    email, pw
                }),
            });
            
            const data = await result.json();
            console.log("Signin API response:", data);
            // 여기서 API 응답을 확인하세요
            
            if (data.token) {
                // 로그인 성공 시 토큰과 사용자 정보를 저장
                localStorage.setItem('token', data.token);

                // 사용자 정보 저장
                localStorage.setItem('userInfo', JSON.stringify(data.userInfo));

                alert('로그인 성공');
                navigate('/');  // 메인 페이지로 이동
            } else {
                // 로그인 실패 시 메시지 알림
                alert(data.message);
            }
        } catch (error) {
            console.error("Signin failed:", error);
            alert("로그인 중 오류가 발생했습니다.");
        }

    };


    return(
        <SigninPresenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            Signin={Signin}
        />
    )
}

export default withoutAuth(SigninContainer);