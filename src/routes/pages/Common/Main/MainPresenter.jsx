
/* 
    하나의 페이지를 Container와 Presenter로 분리하고 각 역할은 아래와 같다

    * Container: 백엔드에서 데이터를 불러와 state 관리, 로직을 담당하는 함수 선언
    * Presenter: 불러온 데이터를 토대로 페이지에 출력, 함수 사용
*/
const MainPresenter = ({
    text,

    buttonClick,

    SignUp,
    isSignUp,

    SignIn,
    isSignIn,
}) => {
    /*
        Presenter에서는 단순히 받아온 데이터를 어떻게 보여줄 것인지만 표현한다

        * 물론 예외는 있다.
    */


    /*
        Presenter 작성 팁
        
        !: 특정 조건일 때만 해당 요소를 보여줘야 하는 경우 아래와 같이 작성하면 깔끔하게 작성할 수 있다
            ex) 모달을 보여주는 state이름을 isModal이라고 가정한다
            {
                isModal && 
                <div className="modal">
                    모달 내용
                </div>
            }
            * 이는 isModal이 true일 경우에만 div의 내용을 띄운다는 의미이다
        
        !!: 조건에 따라 다른 요소를 보여줘야 하는 경우 아래와 같이 작성하면 깔끔하게 작성할 수 있다.
            ex) isUser가 true이면 회원 페이지를 보여주고 false이면 비회원 페이지를 보여주는 경우
            {
                isUser ?
                <div className="user-page">
                    회원 페이지 내용
                </div>
                :
                <div className="non-user-page">
                    비회원 페이지 내용
                </div>
            }
            * 이는 isUser가 true면 : 앞에 있는 내용을 보여주고 false면 : 아래의 내용을 보여준다.
        
        !!!: 접근 연산자(.)사용 시 주의할 점은 해당 멤버(속성)가 undefined인 경우(완전히 없는 경우) 오류가 난다
            이 때 아래와 같이 작성하면 없는 경우에도 오류가 나지 않고 넘어갈 수 있다
            ex) user객체에 있는 email 멤버(속성)에 접근 할 경우
                user?.email
            위와 같이 작성하면 해당 멤버(속성)가 있는 경우에만 그에 맞는 데이터를 보여준다
    */
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