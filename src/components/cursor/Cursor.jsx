import { useEffect, useState } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const hoverable = e.target.closest(
        'a, button, [role="button"], input[type="submit"]'
      );
      setIsHovering(!!hoverable);
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", checkHover);
    document.addEventListener("mouseout", () => setIsHovering(false));

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", checkHover);
      document.removeEventListener("mouseout", () => setIsHovering(false));
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hovering" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
