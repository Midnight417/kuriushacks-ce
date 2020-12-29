import React from "react";

export const Bubble = ( {className, large = false} ) => {
    if (large) {
        return <div className={className}></div>
    }
    else {  
        return <img src="graphics/bubble.svg" alt="white bubble"  className={className} />
    }
}