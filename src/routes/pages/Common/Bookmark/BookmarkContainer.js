import React, { useState } from "react";
import { BookmarkPresenter } from "./BookmarkPresenter";

const BookmarkContainer = () => {

    const [bookmarkDatas, setBookmarkDatas] = useState([
        {
            title: "다른 책 제목",
            author: "다른 저자",
            date: "2024. 08. 01",
            cover: "book.jpg"
        },
        {
            title: "또 다른 책 제목",
            author: "또 다른 저자",
            date: "2024. 08. 01",
            cover: "book2.jpg"
        },
        {
            title: "어떤 책 제목",
            author: "어떤 저자",
            date: "2024. 08. 01",
            cover: "book3.jpg"
        },
        {
            title: "새로운 책 제목",
            author: "새로운 저자",
            date: "2024. 08. 01",
            cover: "book4.jpg"
        },
    ])

    return(
        <BookmarkPresenter
            bookmarkDatas = {bookmarkDatas}
        />
    )
}

export default BookmarkContainer;