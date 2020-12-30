import React from "react";
import { Bubble } from "./Bubble";
import { Header } from "./layouts/Header"

export const LandingPage = ( {theme, setTheme} ) => {


    return (
        <div className="landing-background">
            <section className="landing-page">
                <Header theme={theme} setTheme={setTheme} />

                <div className="landing-info container">
                    <img src="graphics/undraw_healthy_options.svg" alt="food on phone" className="landing-image" />
                    <div className="landing-text">
                        <h1>
                            Lorem Ipsum
                </h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                    </div>
                </div>

                <Bubble className="bubble-1" large="true" />
                <Bubble className="bubble-2" large="true" />
                <Bubble className="bubble-3" />
                <Bubble className="bubble-4" />
                <Bubble className="bubble-5" />
                <Bubble className="bubble-6" />
                <Bubble className="bubble-7" />
                <svg viewBox="0 0 300 30" className="section-border">
                    <path d="m 0,28.49804 c 0,0 14.527218,3.282 52.532101,-15.14994 55.581599,-26.95645 156.819599,21.0305 210.275459,2.01629 L 300,0 v 30 H 0 Z" />
                </svg>
            </section>
        </div>
    )
}