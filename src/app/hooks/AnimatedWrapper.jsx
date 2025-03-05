"use client"; // Only if using Next.js App Router (optional)

import { useEffect, useRef, useState } from "react";

const AnimatedWrapper = ({ children, threshold = 0.3 }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR issues

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add("animate");
            setHasAnimated(true);
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, threshold]);

  return (
    <div ref={ref} className="animation">
      {children}
    </div>
  );
};

export default AnimatedWrapper;
