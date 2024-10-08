import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SignupPresenter } from "./SignupPresenter";
import withoutAuth from "../../../../utils/withoutAuth";


const SignupContainer = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        pw: '',
        confirmPw: '',
        tel: '',
        name: '',
        nickname: '',
        birthday: '',
    });

    const navigate = useNavigate();

    const validateInput = () => {
        const { email, pw, confirmPw, tel, name, nickname, birthday } = userInfo;

        if (!email || !pw || !confirmPw || !tel || !name || !nickname || !birthday) {
            alert('모든 정보를 입력해주세요!');
            return false;
        }

        if (pw !== confirmPw) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return false;
        }

        return true;
    };

    const Signup = async () => {
        
        const { email, pw, confirmPw, tel, name, nickname, birthday } = userInfo;

        // // 이메일과 비밀번호 유효성 검사
        // if (!email.length) {
        //     alert('아이디(이메일)을 입력해주세요!');
        //     return;
        // }

        // if (!pw.length) {
        //     alert('비밀번호를 입력해주세요!');
        //     return;
        // }

        // // // 비밀번호와 비밀번호 확인 일치 여부 검사
        // // if (pw !== confirmPw) {
        // //     alert('비밀번호가 일치하지 않습니다!');
        // //     return;
        // // }

        const result = await fetch('http://localhost:3333/signup', {
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
                email : email,
                pw : pw,
                confirmPw : confirmPw,
                name : name,
                tel : tel,
                nickname : nickname,
                birthday : birthday,
            }),
        });

        const data = await result.json();
        console.log(data);

        if (data.message === '회원가입 성공') {
            alert('회원가입 성공');
            // 회원가입 성공 시 로그인 페이지로 이동
            navigate('/signin');
        } else {
            alert(data.message);
        }

        // if (data.status === 4091) {
        // //     // 4091은 문제가 없다는 것을 뜻하므로 메인 페이지로 이동
        //     navigate('/');
        // }

        // // // 문제가 있을 경우 에러 메시지를 사용자에게 알려준다.
        // alert(data.message);
    }

    return(
        <SignupPresenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            Signup={Signup}
        />
    )
}

export default withoutAuth(SignupContainer);