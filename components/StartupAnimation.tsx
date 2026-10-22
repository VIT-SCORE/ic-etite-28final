"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * StartupAnimation
 *
 * First-ever visit  → Logo animation  +  "Welcome to ic-ETITE'28" screen
 * Session refresh   → Logo animation  only  (no welcome screen)
 * Subsequent tabs   → Logo animation  only  (session was already marked visited)
 */
export default function StartupAnimation() {
  // 'logo'    = show only the logo animation
  // 'welcome' = show logo → then welcome screen
  // 'hidden'  = nothing to show
  const [phase, setPhase] = useState<"logo" | "welcome" | "hidden">("logo");
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const triggerExit = useCallback(() => {
    setPhase("hidden");
  }, []);

  useEffect(() => {
    // ── Determine if first-ever visit ──────────────────────────────────────
    // We use localStorage (persists across tabs/sessions) to detect the very
    // first visit, and sessionStorage (per-tab, reset on refresh) to detect
    // within-tab refreshes.
    const everVisited = localStorage.getItem("icetite28_visited");
    const sessionVisited = sessionStorage.getItem("icetite28_session");

    const isFirstEver = !everVisited;

    // Mark both flags
    localStorage.setItem("icetite28_visited", "1");
    sessionStorage.setItem("icetite28_session", "1");

    if (isFirstEver) {
      // First ever load: logo → welcome screen
      setPhase("welcome");
    } else {
      // Refresh or revisit within/across sessions: logo only
      setPhase("logo");
    }
  }, []);

  useEffect(() => {
    if (phase === "hidden") return;

    // Expose global replay for navbar logo click
    (window as unknown as { restartIntro: () => void }).restartIntro = replay;
    window.addEventListener("replay-startup-animation", replay);

    if (phase === "logo") {
      // Show logo, then hide after 3.75s
      const timer = setTimeout(() => setPhase("hidden"), 3800);
      return () => {
        window.removeEventListener("replay-startup-animation", replay);
        clearTimeout(timer);
      };
    }

    if (phase === "welcome") {
      // Logo exits at ~3.75s, then show welcome screen briefly
      const logoTimer = setTimeout(() => {
        setPhase("hidden");
        // Show welcome overlay
        setShowWelcome(true);
        // Fade in
        setTimeout(() => setWelcomeVisible(true), 50);
        // Fade out + remove after 2.5s on screen
        setTimeout(() => setWelcomeVisible(false), 2600);
        setTimeout(() => setShowWelcome(false), 3300);
      }, 3800);

      return () => {
        window.removeEventListener("replay-startup-animation", replay);
        clearTimeout(logoTimer);
      };
    }

    return () => {
      window.removeEventListener("replay-startup-animation", replay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, renderKey]);

  const replay = useCallback(() => {
    setPhase("logo");
    setShowWelcome(false);
    setWelcomeVisible(false);
    setRenderKey((prev) => prev + 1);
  }, []);

  return (
    <>
      {/* ── Logo Animation Overlay ── */}
      {phase !== "hidden" && (
        <div
          id="intro-overlay"
          className="active"
          key={renderKey}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "#f7f7f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            animation:
              "introExit 0.9s cubic-bezier(0.77, 0, 0.18, 1) 2.85s forwards",
          }}
          aria-label="ic-ETITE'28 Startup Animation"
        >
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
        </div>
      )}

      {/* ── Welcome Screen (first-ever visit only) ── */}
      {showWelcome && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99998,
            background:
              "radial-gradient(circle at 50% 45%, rgba(255,0,80,0.06), transparent 35%), #f7f7f7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            opacity: welcomeVisible ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1)",
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
            ic-<span style={{ color: "#ff0050", fontWeight: 700 }}>ETITE</span>
            <span style={{ color: "#181818", fontWeight: 400 }}>&apos;28</span>
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
    </>
  );
}
