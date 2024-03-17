const MainPresenter = ({
    text,

    buttonClick,

    SignUp,
    isSignUp,

    SignIn,
    isSignIn,
}) => {
    return (
        <div>
            <button onClick={buttonClick}>데이터 요청</button>

            <div>요청한 데이터: {text}</div>

            <button onClick={SignUp}>회원가입</button>
            <div>회원가입: {isSignUp}</div>

            <button onClick={SignIn}>로그인</button>
            <div>로그인: {isSignIn ? '로그인 성공' : '로그인 실패'}</div>
        </div>
    )
}

export default MainPresenter;