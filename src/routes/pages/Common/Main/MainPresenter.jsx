const MainPresenter = ({
    text,

    buttonClick,
}) => {
    return (
        <div>
            <button onClick={buttonClick}>데이터 요청</button>

            <div>요청한 데이터: {text}</div>
        </div>
    )
}

export default MainPresenter;