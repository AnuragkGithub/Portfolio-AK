import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorCircleRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorCircle = cursorCircleRef.current;
    if (!cursorDot || !cursorCircle) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot position instantly
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const animateCircle = () => {
      // Add a trailing lag (smooth interpolation)
      const delay = 8; // Higher = slower trail
      circleX += (mouseX - circleX) / delay;
      circleY += (mouseY - circleY) / delay;

      cursorCircle.style.left = `${circleX}px`;
      cursorCircle.style.top = `${circleY}px`;

      requestAnimationFrame(animateCircle);
    };

    window.addEventListener("mousemove", onMouseMove);
    const animationFrame = requestAnimationFrame(animateCircle);

    // Hover effect for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("interactive-card") ||
        target.closest(".interactive-card") ||
        target.style.cursor === "pointer";

      if (isClickable) {
        cursorCircle.classList.add("hovered");
      } else {
        cursorCircle.classList.remove("hovered");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorCircleRef} className="custom-cursor" />
    </>
  );
}