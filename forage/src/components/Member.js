import React from "react";

export const Member = ({ children, name, icon = "graphics/user-icon.png" }) => {
    return (
        <div className="member">
            <div>
            <img src={icon} alt="user" />
            <svg width="116" height="66" className="icon-border">
                <path d="M8,8 a1,1 0 0,0 100,0"/>
            </svg>
            </div>
            <h2>{name}</h2>
            <p>{children}</p>
        </div>
    )
}