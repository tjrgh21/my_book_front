import React from "react";
import { Layout } from "../../../../components/Layout/Layout";
import { InputBox } from "../../../../components/Sign/InputBox";
import { ButtonBox } from "../../../../components/Sign/ButtonBox";

export const SigninList = ({
    userInfo,  setUserInfo, Signin
}) => {
    return(
        <Layout
            type = {'home'}
            title_name = {"로그인"}
            main_contents = {
                <div className="Sign-container">
                    <div className="Signin-box">
                        <InputBox
                            label = {"아이디(이메일)"}
                            type = {'text'}
                            placeholder = {"아이디(이메일)를 입력해주세요"}
                            value={userInfo.email}
                            onChange={e => {
                                const email = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, email };
                                })
                            }}
                        />

                        <InputBox
                            label = {"비밀번호"}
                            type = {'password'}
                            placeholder = {"비밀번호를 입력해주세요"}
                            value={userInfo.pw}
                            onChange={e => {
                                const pw = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, pw };
                                })
                            }}
                        />
                    </div>
                    
                    <div className="Signin-BtnBox">
                        <ButtonBox
                            title={"로그인"}
                            onClick = {Signin}
                        />
                    </div>
                    <div className="Sign-menu-box">
                        <ul className="Sign-menu">
                            <li>
                                <a className="menu-link" href="/signup">아이디 찾기</a>
                            </li>
                            <li>
                                <a className="menu-link" href="/signup">비밀번호 찾기</a>
                            </li>
                            <li>
                                <a className="menu-link" href="/signup">회원가입</a>
                            </li>
                        </ul>
                    </div>

                </div>
            }
        />
    )
}
