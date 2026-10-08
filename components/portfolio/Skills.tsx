import React from "react";
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Tailwind",
  "GSAP",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Git",
];
const Skills = () => {
  return (
    <section id="skills" className="skills ">
      <div className="container">
        <div className="section-label reveal">
          04 <span /> Tools I build with
        </div>
        <h2 className="display-heading reveal">
          A flexible
          <br />
          <span>toolkit.</span>
        </h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee marquee-one">
          {skills.concat(skills).map((skill, i) => (
            <span key={`${skill}-${i}`}>
              {skill}
              <b>✦</b>
            </span>
          ))}
        </div>
        <div className="marquee marquee-two">
          {skills
            .slice()
            .reverse()
            .concat(skills.slice().reverse())
            .map((skill, i) => (
              <span key={`${skill}-${i}`}>
                {skill}
                <b>✦</b>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
