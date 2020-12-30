import React from "react";
import { Member } from "./Member"

export const Creators = () => {

    return (
        <section className="creators">
            <h1>Meet the Team!</h1>
            <div class="team-members">
                <Member name="Leo Tian">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </Member>
                
                <Member name="Pak Tung Chow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </Member>
                
                <Member name="Bill Gan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </Member>
                
                <Member name="Fiona">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </Member>
            </div>
        </section>
    )
}