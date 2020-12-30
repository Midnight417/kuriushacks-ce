import React from "react";
import { Member } from "./Member"

export const Creators = () => {

    return (
        <section className="creators">
            <h1>Meet the Team!</h1>
            <div class="team-members">
                <Member name="Leo Tian">

                </Member>

                <Member name="Pak Tung Chow">
                    Pak Tung Chow is a Grade 11 student who is looking to pursue a career in software engineering. He is a results driven individual who invests time into exploring problems and seeing their solutions to completion. He is currently developing competencies the MERN stack, Python, Java, HTML/CSS/JS, React, Firebase, Godot, C++, and Unity.
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