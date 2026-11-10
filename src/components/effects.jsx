import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

/* ReactBits-inspired effects, adapted to the Boostech design tokens. */

const EASE = [0.22, 1, 0.36, 1];

export function BlurText({ text, className = "", delay = 0.035, as = "span" }) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
          transition={{
            duration: 0.75,
            delay: index * delay,
            ease: EASE,
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

export function CountUp({
  to,
  from = 0,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    const controls = animate(from, to, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, from, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* Tracks the pointer inside a card and exposes the position as CSS vars. */
export function useSpotlight() {
  const handlePointerMove = (event) => {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return { onPointerMove: handlePointerMove };
}

export function ShinyText({ text, className = "" }) {
  return <span className={`shiny-text${className ? ` ${className}` : ""}`}>{text}</span>;
}

export function StarBorder({
  as: Tag = "a",
  className = "",
  light = false,
  children,
  ...rest
}) {
  return (
    <Tag
      className={`star-border${light ? " star-border--light" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function TiltCard({ children, className = "", amount = 8 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    ref.current.style.transform = `perspective(900px) rotateX(${((0.5 - py) * amount).toFixed(2)}deg) rotateY(${((px - 0.5) * amount * 1.2).toFixed(2)}deg) translateY(-3px)`;
    ref.current.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    ref.current.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card${className ? ` ${className}` : ""}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
      <span className="tilt-card__glare" aria-hidden="true" />
    </div>
  );
}

export function ClickSpark() {
  const reduce = useReducedMotion();
  const [sparks, setSparks] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (reduce) return undefined;

    const onClick = (event) => {
      const id = idRef.current + 1;
      idRef.current = id;
      setSparks((current) => [
        ...current.slice(-4),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id));
      }, 650);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [reduce]);

  if (reduce) return null;

  return (
    <span className="click-sparks" aria-hidden="true">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="click-spark"
          style={{ left: spark.x, top: spark.y }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <i key={angle} style={{ "--angle": `${angle}deg` }} />
          ))}
        </span>
      ))}
    </span>
  );
}
