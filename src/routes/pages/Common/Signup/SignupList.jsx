import React from "react";
import { Layout } from "../../../../components/Layout/Layout";
import { InputBox } from "../../../../components/Sign/InputBox";
import { ButtonBox } from "../../../../components/Sign/ButtonBox";
import '../Main/Main.css'


export const SignupList = ({
    userInfo,  setUserInfo, Signup
}) => {
    return(
        <Layout
            type = {'home'}
            title_name = {"회원가입"}
            main_contents = {
                <div className="Sign-container">
                    <div className="Signup-box">
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

                        <InputBox
                            label = {"비밀번호 확인"}
                            type = {'password'}
                            placeholder = {"비밀번호를 입력해주세요"}
                            value={userInfo.confirmPw}
                            onChange={e => {
                                const confirmPw = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, confirmPw };
                                })
                            }}
                        />

                        <InputBox
                            label = {"이름"}
                            type = {'text'}
                            placeholder = {""}
                            value={userInfo.name}
                            onChange={e => {
                                const name = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, name };
                                })
                            }}
                        />

                        <InputBox
                            label = {"생년월일"}
                            type = {'text'}
                            placeholder = {"0000-00-00"}
                            value={userInfo.birthday}
                            onChange={e => {
                                const birthday = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, birthday };
                                })
                            }}
                        />

                        <InputBox
                            label = {"닉네임"}
                            type = {'text'}
                            placeholder = {""}
                            value={userInfo.nickname}
                            onChange={e => {
                                const nickname = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, nickname };
                                })
                            }}
                        />

                        <InputBox
                            label = {"휴대폰"}
                            type = {'text'}
                            placeholder = {"010-1234-5678"}
                            value={userInfo.tel}
                            onChange={e => {
                                const tel = e.target.value;
                                setUserInfo(prev => {
                                    return { ...prev, tel };
                                })
                            }}
                        />
                    </div>
                    <div className="Signup-BtnBox">
                        <ButtonBox
                            title={"가입하기"}
                            onClick = {Signup}
                        />
                    </div>

                </div>
            }
        />
    )
}
