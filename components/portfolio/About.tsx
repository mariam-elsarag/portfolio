import { Check } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="about ">
      <div className="container about-container">
        <div className="section-label reveal">
          01 <span /> About
        </div>
        <div className="about-transition-word" aria-hidden="true">
          DETAILS
        </div>
        <div className="about-grid">
          <h2 className="display-heading reveal about-copy-reveal">
            A developer who
            <br />
            <span>cares about</span> the details.
          </h2>
          <div className="about-body reveal">
            <p className="lead">
              I enjoy turning early ideas into polished digital products that
              are useful, expressive, and built to last.
            </p>
            <p>
              From the first wireframe to the final interaction, I bring a
              systems mindset and a deep appreciation for the little moments
              that make an interface feel intuitive.
            </p>
            <div className="facts">
              {[
                "3+ Years Experience",
                "Frontend & Full Stack",
                "React / Next.js",
                "Responsive & Scalable",
              ].map((fact) => (
                <span key={fact}>
                  <Check size={14} /> {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
