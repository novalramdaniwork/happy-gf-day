"use client";

import { useEffect, useState } from "react";

export default function OpeningLoader() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("opening-active");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const leaveTimer = window.setTimeout(
      () => setIsLeaving(true),
      reducedMotion ? 250 : 2400,
    );
    const removeTimer = window.setTimeout(
      () => {
        setIsVisible(false);
        document.body.classList.remove("opening-active");
      },
      reducedMotion ? 450 : 3100,
    );

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("opening-active");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`opening-loader${isLeaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Menyiapkan hadiah kecil untuk Haya"
    >
      <div className="opening-orbit opening-orbit-one" aria-hidden="true" />
      <div className="opening-orbit opening-orbit-two" aria-hidden="true" />
      <div className="opening-content">
        <p className="opening-kicker">A little surprise for</p>
        <h2>Haya</h2>
        <img
          className="opening-bouquet"
          src="/flower-bouquet.png"
          alt="Ilustrasi buket bunga untuk Haya"
        />
        <div className="opening-progress" aria-hidden="true">
          <span />
        </div>
        <p className="opening-note">Dibuat dengan cinta</p>
      </div>
    </div>
  );
}
