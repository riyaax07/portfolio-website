import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/ShowcaseCarousel.css";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
}

// 3D Tilt Card Component
const TiltCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Tilt angle up to 16 degrees
    const rotateX = ((0.5 - y) * 24).toFixed(2);
    const rotateY = ((x - 0.5) * 24).toFixed(2);

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );
    setGlare({
      x: x * 100,
      y: y * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // Split technology strings into array of tags
  const tags = project.technologies.split(",").map((t) => t.trim());

  return (
    <div className="showcase-card-container">
      <div
        ref={cardRef}
        className="showcase-card"
        style={{ transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic Specular Glare */}
        <div
          className="showcase-card-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 60%)`,
          }}
        />

        {/* Top Header */}
        <div>
          <div className="showcase-card-top">
            <span className="showcase-card-number">0{index + 1}</span>
            <span className="showcase-card-category">{project.category}</span>
          </div>

          {/* Project Image */}
          <div className="showcase-card-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="showcase-card-image"
              draggable={false}
            />
          </div>
        </div>

        {/* Card Content & Tags */}
        <div className="showcase-card-body">
          <div>
            <h3 className="showcase-card-title">{project.title}</h3>
            <p className="showcase-card-desc">{project.description}</p>
          </div>
          <div className="showcase-card-tags">
            {tags.map((tag, i) => (
              <span key={i} className="showcase-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Showcase 2 Draggable Carousel
const ShowcaseCarousel = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!viewportRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - viewportRef.current.offsetLeft);
    setScrollLeft(viewportRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !viewportRef.current) return;
    e.preventDefault();
    const x = e.pageX - viewportRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed multiplier
    viewportRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!viewportRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - viewportRef.current.offsetLeft);
    setScrollLeft(viewportRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !viewportRef.current) return;
    const x = e.touches[0].pageX - viewportRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    viewportRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Arrow button scrolling
  const scroll = (direction: "left" | "right") => {
    if (!viewportRef.current) return;
    const scrollAmount = viewportRef.current.clientWidth * 0.7;
    viewportRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="showcase-section" id="work">
      {/* Header */}
      <div className="showcase-header">
        <div className="showcase-title-wrap">
          <h2>
            My <span>Work</span>
          </h2>
          <p className="showcase-subtitle">
            <span>⇄</span> Drag or swipe horizontally to explore projects
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="showcase-nav-btns">
          <button
            onClick={() => scroll("left")}
            className="showcase-nav-btn"
            aria-label="Scroll left"
            data-cursor="disable"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="showcase-nav-btn"
            aria-label="Scroll right"
            data-cursor="disable"
          >
            →
          </button>
        </div>
      </div>

      {/* Draggable Viewport */}
      <div
        ref={viewportRef}
        className={`showcase-viewport ${isDragging ? "is-dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="showcase-track">
          {config.projects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}

          {/* Final CTA Card */}
          <div className="showcase-card-container">
            <div className="showcase-card showcase-card-cta">
              <div className="showcase-cta-content">
                <h3>Want to see more?</h3>
                <p>Explore all of my projects, experiments, and creations</p>
                <Link to="/myworks" className="showcase-cta-btn" data-cursor="disable">
                  See All Works →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
