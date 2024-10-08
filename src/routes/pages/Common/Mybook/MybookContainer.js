import React, { useState } from "react";
import {MybookPresenter} from "./MybookPresenter";

const MybookContainer = () => {

    const [mybookDatas, setMybookDatas] = useState([
        {
            title: "데미안",
            author: "헤르만 헤세 (지은이), 전영애 (옮긴이)",
            date: "2024. 07. 19",
            cover: "book.jpg"
        },
        {
            title: "무계획 퇴사자의 1천일 표류기",
            author: "조윤성",
            date: "2024. 07. 19",
            cover: "book2.jpg"
        },
        {
            title: "여름을 한 입 베어 물었더니",
            author: "이꽃님 (지은이)",
            date: "2024. 07. 19",
            cover: "book3.jpg"
        },
        {
            title: "죽이고 싶은 아이 - 2021 아르코 문학나눔 선정",
            author: "이꽃님 (지은이)",
            date: "2024. 07. 19",
            cover: "book4.jpg"
        },
        {
            title: "죽이고 싶은 아이2",
            author: "이꽃님 (지은이)",
            date: "2024. 07. 19",
            cover: "book.jpg"
        },
        {
            title: "너에게 들려주는 단단한 말",
            author: "김종원 (지은이)",
            date: "2024. 07. 19",
            cover: "book3.jpg"
        },
        {
            title: "당신이 누군가를 죽였다",
            author: "하가시노 게이고 (지은이), 최고은 (옮긴이)",
            date: "2024. 07. 19",
            cover: "book2.jpg"
        },
        {
            title: "그의 운명에 대한 아주 개인적인 생각",
            author: "유시민 (지은이)",
            date: "2024. 07. 19",
            cover: "book4.jpg"
        }
    ])

    return(
        <MybookPresenter
            mybookDatas={mybookDatas}
        />
    )
}

export default MybookContainer;