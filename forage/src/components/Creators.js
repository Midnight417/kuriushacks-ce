import React from "react";
import { Member } from "./Member"

export const Creators = () => {

    return (
        <section className="creators">
            <h1>Meet the Team!</h1>
            <div class="team-members">
                <Member name="Leo Tian">
                Leo Tian is an aspiring engineering or CS major! He is currently developing competencies in several coding languages such as python, C, HTML, CSS, and Javascript, as well as React.
                </Member>

                <Member name="Pak Tung Chow">
                    Pak Tung Chow is a Grade 11 student who is looking to pursue a career in software engineering. He is a results driven individual who invests time into exploring problems and seeing their solutions to completion. He is currently developing competencies the MERN stack, Python, Java, HTML/CSS/JS, React, Firebase, Godot, C++, and Unity.
                </Member>
                
                <Member name="Bill Gan">
                Bill Gan is a Grade 12 student who is looking to pursue a career in software engineering. He is currently learning React, Firebase, JS/HTML/CSS, and Discord.js. He also likes developing games with Gamemaker Studio: 2.
                </Member>
                
                <Member name="Fiona">
                Fiona Xie plans on pursing engineering and enjoys playing around with all sorts of technology. She is self-teaching herself Python, HTML, CSS and Javascript at the moment but has fundamental literacy in Java as well. She also plays bedwars on Minecraft way too much.
                </Member>
            </div>
        </section>
    )
}