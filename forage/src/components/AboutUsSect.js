import React from "react";
import { InfoCard } from "./InfoCard";

export const AboutUsSect = () => {

    return (
        <section className="about-us-sect">
            <h1>About Us</h1>
            <div id="info-cards">
                <InfoCard title="Mission" number="1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </InfoCard>
                
                <InfoCard title="Who We Are" number="2" selected={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </InfoCard>
                
                <InfoCard title="Vision" number="3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum elementum arcu, a mollis quam porta quis. Donec ligula elit, sodales sed ante sed, tincidunt convallis magna.
                </InfoCard>
            </div>
        </section>
    )
}