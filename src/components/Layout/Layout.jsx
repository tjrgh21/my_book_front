import React from "react";
import './Layout.css'
import { Tilte } from "../Title/Title";
import { Bottom } from "../Bottom/Bottom";

export const Layout = (props) => {
    const {title_name, main_contents, type} = props

    return(
        <div className="layout-container">
            <Tilte
                type = {type}
                title_item = {title_name}
            />
            <div className="main-contensts">
                <div className="main-nav">
                    <div className="main-nav-wrap">
                        {main_contents}
                    </div>
                </div>
            </div>
            <Bottom/>
        </div>
    )
}