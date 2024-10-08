import React from "react";

import { SignupList } from "./SignupList";

export const SignupPresenter = ({
    userInfo,  setUserInfo, Signup
}) => {
    return(     
        
        <div className="Signup-contianer">
            <SignupList
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                Signup={Signup}
            />
        </div>
            
    )
}