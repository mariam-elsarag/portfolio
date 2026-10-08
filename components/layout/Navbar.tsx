import { ArrowUpRight, Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationList = [
  ["About", "about"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Experience", "experience"],
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`site-nav  w-full  ${menuOpen ? "menu-open" : ""}`}
      aria-label="Main navigation"
    >
      <div className=" nav-container navbar-container flex flex-1 container items-center justify-between">
        <a href="#top" className="wordmark" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark">M</span>
          <span>Mariam Tarek</span>
        </a>
        <div className="nav-links">
          {navigationList.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Let&apos;s Talk <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {[...navigationList, ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
