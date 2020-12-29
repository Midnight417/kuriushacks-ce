import React from "react";

export const InfoCard = ({ children, number, title, selected = false }) => {
    return (
        <div
            className={"info-card " + (selected ? "selected-card" : undefined)}
            id={"info-card-" + number}
            onMouseEnter={function(numbner) {
                document.querySelector(".selected-card").classList.remove("selected-card")
                document.getElementById("info-card-" + number).classList.add("selected-card")
            }}
            onMouseLeave={() => {
                document.querySelector(".selected-card").classList.remove("selected-card")
                document.getElementsByClassName("info-card")[1].classList.add("selected-card")
            }}
        >
            <h2>{title}</h2>
            <div className="info-image"></div>
            <p>
                {children}
            </p>
        </div>
    )
}