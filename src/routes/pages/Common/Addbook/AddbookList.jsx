import React from "react";
import { Layout } from "../../../../components/Layout/Layout";
import { SearchBox } from "../../../../components/Search/SearchBox";

export const AddbookList = () => {
    return(
        <Layout
            type = {'home'}
            title_name = {"도서 추가"}
            main_contents ={
                <div className="search-list">
                    <SearchBox
                    type={'text'}
                    placeholder = {"검색어를 입력해주세요"}
                    />
                </div>
            }
        />
    )
}