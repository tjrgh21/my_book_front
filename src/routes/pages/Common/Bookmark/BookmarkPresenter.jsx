import React from "react";
import { BookmarkList } from "./BookmarkList";

export const BookmarkPresenter =({
    bookmarkDatas
}) => {
    return(
        <div className="Bookmark-container">
            <BookmarkList
                bookmarkDatas={bookmarkDatas}
            />
        </div>
    )
}