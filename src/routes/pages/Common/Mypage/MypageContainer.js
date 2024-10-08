import React from "react";
import MypagePresenter from "./MypagePresenter";
import withAuth from "../../../../utils/withAuth";

const MypageContainer = ({}) => {

    return(
        <MypagePresenter/>
    )
}

// HOC로 MypageContainer를 래핑하여 인증을 처리
export default withAuth(MypageContainer);