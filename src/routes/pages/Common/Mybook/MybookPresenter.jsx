import React from "react";

import { MybookList } from "./MybookList";

export const MybookPresenter =({
    mybookDatas
}) => {
    return(
        <div className="Mybook-container">
            <MybookList
                mybookDatas={mybookDatas}
            />
        </div>


    )
}