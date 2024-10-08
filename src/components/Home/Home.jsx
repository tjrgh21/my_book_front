import React from "react";
import './Home.css';

const Home = () => {

return(
        <div className="home-container">
            <div>
                <h3>(닉네임)님<br />꾸준히 독서를 해보세요</h3>
            </div>
            <div className="home-item">
                <div><h2>아이템 아이템 아이템 아이템</h2></div>
            </div>
            <div className="home-item">#$#$를 해보세요</div>
            <div className="home-item-row">
                <div className="home-item item-left"><a href="/signin">로그인</a></div>
                <div className="item-right">
                    <div className="home-item">3-2번</div>
                    <div className="home-item">3-3번</div>
                </div>
            </div>
            <div className="home-item"><h2>4번</h2></div>
            <div className="home-item">5번</div>
            <div className="home-item">6번</div>
            <div className="home-item">7번</div>
            <div className="home-item">8번</div>
            <div className="home-item">9번</div>
            <div className="home-item">10번</div>
            <div className="home-item">11번</div>
            <div className="home-item">12번</div>
        </div>
    )
    
}

export default Home;