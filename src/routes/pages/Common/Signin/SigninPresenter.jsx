import React from "react";

import { SigninList } from "./SigninList"

export const SigninPresenter = ({
    userInfo,  setUserInfo, Signin
}) => {
    return(
        <div className="Signin-container">
            <SigninList
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                Signin={Signin}
            />
        </div>
        


    )
}