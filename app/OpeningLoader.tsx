"use client";

import { useEffect, useRef, useState } from "react";

export default function OpeningLoader() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const musicTimer = useRef<number | null>(null);
  const nextNote = useRef(0);

  const notes = [
    261.63, 329.63, 392, 493.88, 440, 392, 329.63, 293.66,
    349.23, 440, 523.25, 493.88, 392, 349.23, 329.63, 293.66,
  ];

  function scheduleMelody(context: AudioContext) {
    const playNote = () => {
      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = "sine";
      oscillator.frequency.value = notes[nextNote.current % notes.length];
      filter.type = "lowpass";
      filter.frequency.value = 1200;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.055, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.15);
      oscillator.connect(filter).connect(gain).connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 1.2);
      nextNote.current += 1;
    };

    playNote();
    musicTimer.current = window.setInterval(playNote, 680);
  }

  async function startMusic() {
    const context = audioContext.current ?? new AudioContext();
    audioContext.current = context;
    await context.resume();
    if (musicTimer.current === null) scheduleMelody(context);
    setIsMusicPlaying(true);
  }

  async function toggleMusic() {
    const context = audioContext.current;
    if (!context || context.state === "suspended") {
      await startMusic();
    } else {
      if (musicTimer.current !== null) {
        window.clearInterval(musicTimer.current);
        musicTimer.current = null;
      }
      await context.suspend();
      setIsMusicPlaying(false);
    }
  }

  async function openWithMusic() {
    await startMusic();
    setIsLeaving(true);
    window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("opening-active");
    }, 700);
  }

  useEffect(() => {
    document.body.classList.add("opening-active");

    return () => {
      if (musicTimer.current !== null) window.clearInterval(musicTimer.current);
      void audioContext.current?.close();
      document.body.classList.remove("opening-active");
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`opening-loader${isLeaving ? " is-leaving" : ""}`}
          aria-label="Hadiah kecil untuk Haya"
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
            <button className="opening-button" onClick={openWithMusic} type="button">
              <span aria-hidden="true">♪</span> Buka dengan musik
            </button>
            <button
              className="opening-silent-button"
              onClick={() => {
                setIsLeaving(true);
                window.setTimeout(() => {
                  setIsVisible(false);
                  document.body.classList.remove("opening-active");
                }, 700);
              }}
              type="button"
            >
              Lanjut tanpa musik
            </button>
          </div>
        </div>
      )}
      <button
        className={`music-toggle${isMusicPlaying ? " is-playing" : ""}`}
        onClick={toggleMusic}
        type="button"
        aria-label={isMusicPlaying ? "Matikan musik" : "Nyalakan musik"}
        title={isMusicPlaying ? "Matikan musik" : "Nyalakan musik"}
      >
        <span aria-hidden="true">{isMusicPlaying ? "♫" : "♪"}</span>
      </button>
    </>
  );
}
