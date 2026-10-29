
"use client";

import { useEffect, useState, useCallback, useRef } from "react";

type Phase = "checking" | "logo" | "welcome" | "hidden";

export default function StartupAnimation() {
  const [phase, setPhase] = useState<Phase>("checking");
  const [firstVisit, setFirstVisit] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const initialized = useRef(false);

  // Detect the first-ever visit.
 // First visit: welcome only. Returning visits: logo only.
useEffect(() => {
  if (initialized.current) return;
  initialized.current = true;

  try {
    const isFirstVisit = !localStorage.getItem("icetite28_visited");

    localStorage.setItem("icetite28_visited", "1");
    sessionStorage.setItem("icetite28_session", "1");

    setFirstVisit(isFirstVisit);
    setPhase(isFirstVisit ? "welcome" : "logo");
  } catch {
    setFirstVisit(false);
    setPhase("logo");
  }
}, []);

  // Transition between the logo, welcome message and website.
  useEffect(() => {
    if (phase === "checking" || phase === "hidden") return;

    const replay = () => {
      setFirstVisit(false);
      setWelcomeVisible(false);
      setPhase("logo");
      setRenderKey((prev) => prev + 1);
    };

    (
      window as unknown as { restartIntro: () => void }
    ).restartIntro = replay;

    window.addEventListener("replay-startup-animation", replay);

    let timers: ReturnType<typeof setTimeout>[] = [];

    if (phase === "logo") {
      timers.push(
        setTimeout(() => {
          setPhase(firstVisit ? "welcome" : "hidden");
        }, 3800)
      );
    }

    if (phase === "welcome") {
      setWelcomeVisible(false);

      timers.push(
        setTimeout(() => setWelcomeVisible(true), 50),
        setTimeout(() => setWelcomeVisible(false), 2600),
        setTimeout(() => setPhase("hidden"), 3300)
      );
    }

    return () => {
      window.removeEventListener("replay-startup-animation", replay);
      timers.forEach(clearTimeout);
    };
  }, [phase, firstVisit, renderKey]);

  if (phase === "checking" || phase === "hidden") {
    return null;
  }

  return (
    <div
      id="intro-overlay"
      className="active"
      key={renderKey}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background:
          phase === "welcome"
            ? "radial-gradient(circle at 50% 45%, rgba(255,0,80,0.06), transparent 35%), #f7f7f7"
            : "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation:
          phase === "logo" && !firstVisit
            ? "introExit 0.9s cubic-bezier(0.77, 0, 0.18, 1) 2.85s forwards"
            : "none",
        transition: "background 0.4s ease",
      }}
      aria-label="ic-ETITE'28 Startup Animation"
    >
      {phase === "logo" && (
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

      {phase === "welcome" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            opacity: welcomeVisible ? 1 : 0,
            transform: welcomeVisible ? "translateY(0)" : "translateY(8px)",
            transition:
              "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <p
            style={{
              margin: 0,
              color: "#888",
              fontSize: "clamp(11px, 1.2vw, 15px)",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Welcome to
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 7vw, 96px)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              color: "#181818",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: 1,
            }}
          >
            ic-
            <span style={{ color: "#ff0050", fontWeight: 700 }}>
              ETITE
            </span>
            <span style={{ color: "#181818", fontWeight: 400 }}>
              &apos;28
            </span>
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              color: "#555",
              fontSize: "clamp(9px, 1vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            SCORE · VIT Vellore
          </p>
        </div>
      )}
    </div>
  );
}
