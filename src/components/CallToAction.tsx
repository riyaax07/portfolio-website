import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";
import Stepper, { Step } from "./Stepper";
import { useState } from "react";

const CallToAction = () => {
  const [showStepper, setShowStepper] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div className="cta-section">
      {!showStepper ? (
        <div className="cta-buttons">
          <Link to="/play" className="cta-btn cta-btn-play" data-cursor="disable">
            Play With Me →
          </Link>
          <button
            className="cta-btn cta-btn-hire"
            data-cursor="disable"
            onClick={() => setShowStepper(true)}
          >
            Hire Me →
          </button>
        </div>
      ) : done ? (
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.7)", padding: "2rem" }}>
          <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🚀 Thanks for reaching out!</p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>
            I'll get back to you at <a href={`mailto:${config.contact.email}`} style={{ color: "#a78bfa" }}>{config.contact.email}</a>
          </p>
        </div>
      ) : (
        <Stepper
          initialStep={1}
          onFinalStepCompleted={() => setDone(true)}
          backButtonText="← Back"
          nextButtonText="Next →"
        >
          {/* Step 1 — Who are you? */}
          <Step>
            <h3>Hey! Who's reaching out? 👋</h3>
            <p>
              Whether you're a recruiter, a startup founder, a fellow dev, or someone with a cool idea — I'd love to hear from you.
            </p>
            <p>
              I'm currently open to <strong style={{ color: "#a78bfa" }}>SWE internships, open-source collabs, and freelance web projects</strong>. If that sounds like you, let's keep going.
            </p>
          </Step>

          {/* Step 2 — What are you looking for? */}
          <Step>
            <h3>What are you looking for? 🎯</h3>
            <p>Here's what I bring to the table:</p>
            <p>⚡ <strong style={{ color: "#fff" }}>Full-stack dev</strong> — React, TypeScript, Node.js, Supabase</p>
            <p>🌱 <strong style={{ color: "#fff" }}>Open source</strong> — GSSoC '25 & '26 contributor</p>
            <p>🤖 <strong style={{ color: "#fff" }}>AI/ML learner</strong> — Python, building toward applied ML</p>
            <p>🎨 <strong style={{ color: "#fff" }}>Freelance sites</strong> — portfolio & landing pages</p>
          </Step>

          {/* Step 3 — Let's connect */}
          <Step>
            <h3>Let's make it happen 🤝</h3>
            <p>Drop me a message directly — I reply within 24 hours.</p>
            <p>
              📧 <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            </p>
            <p>
              💼 <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn — let's connect</a>
            </p>
            <p>
              🐙 <a href={config.contact.github} target="_blank" rel="noopener noreferrer">GitHub — see my work</a>
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
              Hit "Send It" and I'll know you came through the portfolio 😄
            </p>
          </Step>
        </Stepper>
      )}
    </div>
  );
};

export default CallToAction;