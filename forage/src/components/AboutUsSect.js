import React from "react";
import { InfoCard } from "./InfoCard";

export const AboutUsSect = () => {

    return (
        <section className="about-us-sect">
            <h1>About Us</h1>
            <div id="info-cards">
                <InfoCard title="Mission" number="1">
                    To educate the masses about the subject of hunger and food security.
                </InfoCard>
                
                <InfoCard title="Who We Are" number="2" selected={true}>
                    To provide a solution for locating food resources within your region.
                </InfoCard>
                
                <InfoCard title="Vision" number="3">
                    To raise awareness through a medium which appeals to users.
                </InfoCard>
            </div>
        </section>
    )
}