"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, Code2, MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Contact from "./portfolio/Contact";
import Footer from "./layout/Footer";
import BackToTop from "./layout/BackToTop";
import Navbar from "./layout/Navbar";
import Philosophy from "./portfolio/Philosophy";
import Skills from "./portfolio/Skills";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Projects from "./portfolio/Projects";
import Experience from "./portfolio/Experience";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;
      const mm = gsap.matchMedia();
      gsap.fromTo(
        ".hero-reveal",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
          overwrite: "auto",
        },
      );
      gsap.to(".site-nav .nav-container", {
        backgroundColor: "rgba(19,18,22,.42)",
        borderColor: "rgba(255,255,255,.10)",
        backdropFilter: "blur(18px)",
        scrollTrigger: { start: 80, end: 240, scrub: true },
      });
      gsap.to(".ambient-one", {
        y: 260,
        x: 140,
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: ".about .about-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".ambient-two", {
        y: -220,
        x: -100,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".skills",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      mm.add("(min-width: 801px)", () => {
        const hero = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=1050",
            scrub: 1,
            pin: true,
          },
        });
        hero
          .to(
            ".hero-copy",
            { y: -155, scale: 0.8, opacity: 0, ease: "power2.in" },
            0,
          )
          .to(
            ".hero-word",
            {
              y: (i) => (i % 2 ? -120 : 150),
              x: (i) => (i - 1) * 180,
              rotate: (i) => (i % 2 ? -10 : 8),
              opacity: 0,
              stagger: 0.02,
              ease: "power2.inOut",
            },
            0.08,
          )
          .to(".hero-reveal", { opacity: 0 }, 0)
          .to(
            ".system-visual",
            { scale: 1.45, rotate: 18, opacity: 0.12, ease: "power2.inOut" },
            0,
          )
          .fromTo(
            ".about-transition-word",
            { scale: 0.35, opacity: 0, y: 160 },
            { scale: 1, opacity: 1, y: 0, ease: "power3.out" },
            0.45,
          );
        gsap.to(".about-copy-reveal", {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".about .container",
            start: "top 72%",
            end: "top 35%",
            scrub: true,
          },
        });

        const about = gsap.timeline({
          scrollTrigger: {
            trigger: ".about",
            start: "top top",
            end: "+=850",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
        about
          .to(
            ".about-transition-word",
            {
              scale: 2.4,
              x: -40,
              letterSpacing: ".08em",
              opacity: 0.14,
              ease: "power2.in",
            },
            0,
          )
          .to(".about-grid", { y: -100, opacity: 0.1, ease: "power2.in" }, 0.2)
          .fromTo(
            ".work-transition",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "power3.inOut" },
            0.36,
          );

        gsap.to(".project-index", {
          xPercent: -35,
          opacity: 0.65,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".work",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".philosophy-heading", {
          xPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: ".philosophy",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }),
      );
      gsap.to(".timeline-progress", {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".experience",
          start: "top 60%",
          end: "bottom 65%",
          scrub: true,
        },
      });
      mm.add("(max-width: 800px)", () => {
        gsap.to(".hero-copy", {
          y: -80,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Skills />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
