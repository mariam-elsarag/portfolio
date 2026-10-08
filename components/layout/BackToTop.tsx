"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      className="back-to-top"
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      data-visible={visible}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  );
};

export default BackToTop;
