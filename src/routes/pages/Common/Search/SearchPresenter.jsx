import React from "react";

import { SearchList } from "./SearchList";

export const SearchPresenter = ({
    testData
}) => {
    return(
        <div className="Search-container">
            <SearchList/>
        </div>
    )
}