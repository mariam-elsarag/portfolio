import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience -wrap">
      <div className="container">
        <div className="section-label reveal">
          05 <span /> Experience
        </div>
        <div className="experience-grid">
          <h2 className="display-heading reveal">
            Where I&apos;ve
            <br />
            <span>been.</span>
          </h2>
          <div className="timeline">
            <span className="timeline-progress" aria-hidden="true" />
            {[
              [
                "Product Engineer",
                "Independent / Freelance",
                "2023 — Now",
                "Building digital products from first principles for people and teams who care about the details.",
              ],
              [
                "Frontend Developer",
                "Northstar Studio",
                "2022 — 2023",
                "Shipped expressive, accessible experiences for early-stage companies and cultural brands.",
              ],
            ].map((item) => (
              <div className="timeline-item reveal" key={item[0]}>
                <span className="timeline-dot" />
                <div className="timeline-date">{item[2]}</div>
                <div>
                  <h3>{item[0]}</h3>
                  <p className="timeline-company">{item[1]}</p>
                  <p>{item[3]}</p>
                  <div className="tag-row">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Design systems</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
