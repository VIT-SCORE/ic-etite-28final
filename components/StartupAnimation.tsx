"use client";

import { useEffect, useRef, useState } from "react";

type StartupStage = "welcome" | "logo";

declare global {
  interface Window {
    __icetiteStartupAnimation?: StartupStage;
  }
}

export default function StartupAnimation() {
  const [stage, setStage] = useState<StartupStage | null>(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const selectedStage = window.__icetiteStartupAnimation;
    delete window.__icetiteStartupAnimation;
    if (selectedStage) setStage(selectedStage);
  }, []);

  useEffect(() => {
    if (!stage) return;

    const previousOverflow = document.body.style.overflow;
    document.documentElement.classList.add("startup-animation-pending");
    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    const finishAnimation = () => {
      const completedKey =
        stage === "welcome"
          ? "icetite28_welcome_completed"
          : "icetite28_logo_completed";
      try {
        localStorage.setItem(completedKey, "1");
      } catch (error) {
        console.warn("Unable to record the completed startup animation.", error);
      }
      setStage(null);
    };

    if (stage === "welcome") {
      timers.push(
        setTimeout(() => setWelcomeVisible(true), 50),
        setTimeout(() => setWelcomeVisible(false), 2600),
        setTimeout(finishAnimation, 3300),
      );
    } else {
      timers.push(setTimeout(finishAnimation, 3800));
    }

    return () => {
      timers.forEach(clearTimeout);
      document.documentElement.classList.remove("startup-animation-pending");
      document.body.style.overflow = previousOverflow;
    };
  }, [stage]);

  if (!stage) return null;

  return (
    <div
      id="intro-overlay"
      className="active"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background:
          stage === "welcome"
            ? "radial-gradient(circle at 50% 45%, rgba(255,0,80,0.06), transparent 35%), #f7f7f7"
            : "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation:
          stage === "logo"
            ? "introExit 0.9s cubic-bezier(0.77, 0, 0.18, 1) 2.85s forwards"
            : "none",
      }}
      aria-label="ic-ETITE'28 Startup Animation"
    >
      {stage === "welcome" ? (
        <div className={`sa-welcome${welcomeVisible ? " visible" : ""}`}>
          <p className="sa-welcome-label">Welcome to</p>
          <h1 className="sa-welcome-title">
            ic-<span>ETITE</span>&apos;28
          </h1>
          <p className="sa-welcome-subtitle">SCORE · VIT Vellore</p>
        </div>
      ) : (
        <div className="sa-stage-wrapper">
          <div className="sa-stage">
            <div className="sa-frame" />
            <div className="sa-dot sa-one" />
            <div className="sa-dot sa-two" />

            <div className="sa-logo-wrap">
              <div className="sa-logo" aria-label="ic-ETITE 28">
                <span className="sa-ic">ic</span>
                <span className="sa-dash">-</span>
                <span className="sa-e">E</span>
                <span className="sa-t">T</span>
                <span className="sa-i">I</span>
                <span className="sa-t">T</span>
                <span className="sa-e">E</span>
                <span className="sa-apostrophe">&apos;</span>
                <span className="sa-year">28</span>
              </div>

              <div className="sa-subtitle">SCORE VIT VELLORE</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
