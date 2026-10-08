import React from "react";
const principles = [
  ["01", "Performance", "Fast interfaces and optimized experiences."],
  ["02", "Accessibility", "Interfaces should be usable by everyone."],
  ["03", "Interaction", "Small details make products feel alive."],
  ["04", "Scalability", "Code should remain maintainable as products grow."],
];
const Philosophy = () => {
  return (
    <section className="philosophy ">
      <div className="container">
        <div className="section-label reveal">
          06 <span /> Philosophy
        </div>
        <h2 className="philosophy-heading reveal">
          Good interfaces
          <br />
          <em>don&apos;t just work.</em>
          <br />
          They communicate.
        </h2>
        <div className="principles">
          {principles.map(([number, title, text]) => (
            <div className="principle reveal" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
