import React from "react";
import { Layout } from "../../../../components/Layout/Layout";
import List from "../../../../components/List/List";


export const BookmarkList = ({
    bookmarkDatas,
}) => {
    return(
        <Layout
            type = {'main'}
            title_name = {"즐겨찾기"}
            main_contents = {
                <List books={ bookmarkDatas }/>
            }
        />
    )
}