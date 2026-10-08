import { ArrowUpRight, Code2 } from "lucide-react";
import React from "react";

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Abstract system visualization">
      <div className="system-orbit orbit-one" />
      <div className="system-orbit orbit-two" />
      <div className="system-core">
        <Code2 size={24} />
        <span>
          build
          <br />
          beautifully
        </span>
      </div>
      <div className="system-node node-one">
        <span>01</span>
        <b>UI</b>
      </div>
      <div className="system-node node-two">
        <span>02</span>
        <b>API</b>
      </div>
      <div className="system-node node-three">
        <span>03</span>
        <b>UX</b>
      </div>
      <div className="system-line line-one" />
      <div className="system-line line-two" />
      <div className="system-line line-three" />
    </div>
  );
}
const Hero = () => {
  return (
    <section id="top" className="hero container ">
      <div className="hero-copy">
        <p className="eyebrow hero-reveal">
          <span className="eyebrow-dot" /> Full-stack developer{" "}
          <span className="eyebrow-line" /> 2026
        </p>
        <h1 className="hero-title hero-reveal">
          Building <span className="hero-word">digital</span>
          <br />
          <span className="hero-word">experiences</span> that{" "}
          <em className="hero-word">feel</em>
          <br />
          as good as they <span className="outline-word hero-word">work.</span>
        </h1>
        <p className="hero-description hero-reveal">
          I&apos;m a Full-Stack Developer focused on building modern, scalable
          web applications with a strong focus on frontend experience,
          performance, and thoughtful interaction design.
        </p>
        <div className="hero-actions hero-reveal">
          <a className="button button-primary" href="#work">
            View my work <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#contact">
            Let&apos;s connect <span>↗</span>
          </a>
        </div>
      </div>
      <SystemVisual />
      <div className="hero-scroll container">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
