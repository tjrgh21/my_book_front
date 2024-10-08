import React from "react";
import "./Title.css"

export const Tilte = (props) => {
    const {title_item, type} = props

    return(
        <div className="top-container">
            <div className="top-nav">
                <div className="top-nav-wrap">
                    <div className="top-nav-item">
                        <span className="top-title-name">{title_item}</span>
                    </div>
                    <div>
                        <div className="top-nav-item">
                            <div className="top-nav-button">
                                {
                                    type === "main"
                                    ?
                                    <div className="top-icons">
                                        <a href="/search"><img src="icon-search.png"/></a>
                                        <a href=""><img style={{width:'22px'}} src="icon-bell.png"/></a>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="top-nav-item">
                            <div className="top-nav-button">
                                {
                                    type === "home"
                                    ?
                                    <a href="/"><img src="icon-home.png"/></a>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="top-nav-item">
                            <div className="top-nav-button">
                                {
                                    type === "add"
                                    ? 
                                    <button className="add-book-button"><a href="/addbook"><span>도서 추가</span></a></button>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}