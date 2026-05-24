import { useEffect } from "react";

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource/dm-mono";

import "./App.css";

function App() {
  function copyEmail() {
    navigator.clipboard.writeText("manoa@example.com").then(() => {
      const toast = document.getElementById("toast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("section:not(.hero)").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a className="logo" href="#">
            <span>M</span>R.
          </a>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <section className="hero" id="hero">
          <div className="hero-eyebrow">
            <span className="wave">👋</span> Hello, I'm
          </div>
          <h1 className="hero-name">
            Manoa
            <br />
            <em>Nampoina</em>
          </h1>
          <p className="hero-desc">
            I study the structure of things — from{" "}
            <strong>real analysis</strong> to
            <strong>computational number theory</strong>. Mathematics is how I
            think, write, and see the world.
          </p>

          <div className="math-floats" aria-hidden="true">
            <svg
              viewBox="0 0 340 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="170"
                cy="170"
                r="140"
                stroke="currentColor"
                stroke-width="1"
              />

              <line
                x1="30"
                y1="170"
                x2="310"
                y2="170"
                stroke="currentColor"
                stroke-width="1"
              />
              <line
                x1="170"
                y1="30"
                x2="170"
                y2="310"
                stroke="currentColor"
                stroke-width="1"
              />

              <path
                d="M30 170 C65 120 100 220 135 170 S205 120 240 170 S305 220 310 170"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
              />

              <circle cx="170" cy="170" r="3" fill="currentColor" />
              <circle cx="30" cy="170" r="2" fill="currentColor" />
              <circle cx="310" cy="170" r="2" fill="currentColor" />
              <circle cx="170" cy="30" r="2" fill="currentColor" />
              <circle cx="170" cy="310" r="2" fill="currentColor" />

              <text
                x="200"
                y="110"
                font-family="serif"
                font-style="italic"
                font-size="18"
                fill="currentColor"
              >
                e
              </text>
              <text
                x="210"
                y="103"
                font-family="serif"
                font-size="11"
                fill="currentColor"
              >
                iπ
              </text>
              <text
                x="222"
                y="110"
                font-family="serif"
                font-size="18"
                fill="currentColor"
              >
                + 1 = 0
              </text>

              <line
                x1="110"
                y1="30"
                x2="110"
                y2="310"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-dasharray="4 6"
              />
              <line
                x1="230"
                y1="30"
                x2="230"
                y2="310"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-dasharray="4 6"
              />
              <line
                x1="30"
                y1="110"
                x2="310"
                y2="110"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-dasharray="4 6"
              />
              <line
                x1="30"
                y1="230"
                x2="310"
                y2="230"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-dasharray="4 6"
              />
            </svg>
          </div>
        </section>

        <section id="about">
          <div className="section-label">§ 01 — About</div>
          <div className="bio-grid">
            <blockquote className="bio-quote">
              "Mathematics is the art of giving the same name to different
              things."
              <br />
              <br />
              <small
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  color: "var(--ink-3)",
                  fontStyle: "normal",
                }}
              >
                — Henri Poincaré
              </small>
            </blockquote>
            <div className="bio-body">
              <p>
                I'm Manoa — a mathematician and builder drawn to the deep
                structures that underlie computation, numbers, and logic. I find
                beauty in proofs the way others find it in poems.
              </p>
              <p>
                My work spans real analysis, abstract algebra, and the
                intersections where pure mathematics meets code. I believe the
                most interesting problems live at boundaries.
              </p>
              <p>
                When I'm not solving problems, I'm sharing the journey — on
                GitHub, on TikTok, and wherever curious minds gather.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-label">§ 02 — Let's build</div>
          <div className="contact-grid">
            <div className="contact-block">
              <h2>Want to build together?</h2>
              <p>Copy my address and let's start a conversation.</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <button
                  className="email-copy"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <svg
                    className="copy-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  manoa@example.com
                </button>
                <span className="copy-toast" id="toast">
                  Copied!
                </span>
              </div>
            </div>

            <div className="contact-block">
              <h2>Connect with me</h2>
              <p>Find me across the internet.</p>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/ma-noa"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    GitHub — ma-noa
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@manoa_ramanantsoa"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z" />
                    </svg>
                    TikTok — @manoa_ramanantsoa
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5S10.67 19 11.5 19s1.5.67 1.5 1.5S12.33 22 11.5 22zm4.5-4H7V4h9v14z" />
                    </svg>
                    Figma — Design work
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    Bluesky — @manoa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrapper">
          <div className="footer-inner">
            <span className="footer-copy">© 2026 Manoa Ramanantsoa</span>
            <span
              className="footer-copy"
              style={{
                fontStyle: "italic",
                color: "var(--ink-3)",
              }}
            >
              ∀ε&gt;0 ∃δ&gt;0 such that this site loads quickly
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
