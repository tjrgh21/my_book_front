import React from "react";
import "./Bottom.css"

export const Bottom = () => {
    return(
        <div className="bottom-container">
            <div className="bottom-nav-wrap">
                <div className="bottom-nav-item">

                    <a class="bottom-nav-tap 1 " href="/">
                        <div class="nav-logo"><img src="icon-home2.png"/></div><span>홈</span>
                    </a>

                    <a class="bottom-nav-tap 2 " href="/bookmark">
                        <div class="nav-logo"><img src="icon-bookmark.png"/></div><span>즐겨찾기</span>
                    </a>

                    <a class="bottom-nav-tap 3 " href="/mybook">
                        <div class="nav-logo"><img style={{width:'1.4rem'}}  src="icon-book.png"/></div><span>내 서재</span>
                    </a>

                    <a class="bottom-nav-tap 4 " href="/mypage">
                        <div class="nav-logo"><img style={{width:'1.5rem'}} src="icon-person.png"/></div><span>내 정보</span>
                    </a>

                </div>
            </div>
        </div>
    )
}