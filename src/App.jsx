import { useEffect } from "react";

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource/dm-mono";

import "./App.css";
import { FaArrowRight, FaTiktok, FaGithub } from "react-icons/fa";
import { PiHandWaving } from "react-icons/pi";

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

  const projects = [
    {
      num: "",
      title: "CEYS Encryptor",
      desc: "A beginner keyless encryption architecture design.",
      tags: ["Linear Algebra", "Number Theory", "C++"],
      year: "2025",
      href: "https://github.com/MA-NOA/Ceys-Encryptor",
    },
    {
      num: "",
      title: "Major Cry",
      desc: "A design support for vertical rescue operations.",
      tags: ["Social Support", "LaTex"],
      year: "2025 // No source code yet",
      href: "",
    },
    {
      num: "",
      title: "This Portfolio",
      desc: "A digital space where mathematics, code and aesthetics intersect.",
      tags: ["ViteJS", "React", "Design"],
      year: "2026",
      href: "https://github.com/MA-NOA/portfolioReact",
    },
  ];

  const skills = [
    {
      num: "01",
      title: "Real Analysis",
      tags: ["Pure math", "Proofs"],
      level: "advanced",
    },
    {
      num: "02",
      title: "Abstract Algebra",
      tags: ["Algebra", "Number theory"],
      level: "advanced",
    },
    {
      num: "03",
      title: "Cybersecurity",
      tags: ["Cisco Certified Ethical Hackers"],
      level: "proficient",
    },
    {
      num: "04",
      title: "LaTeX",
      tags: ["Typesetting", "Academic"],
      level: "proficient",
    },
    {
      num: "05",
      title: "React & D3.js",
      tags: ["Frontend", "Data viz"],
      level: "learning",
    },
    {
      num: "06",
      title: "C++ & Go & Python",
      tags: ["Computation", "Memory Management"],
      level: "advanced",
    },
  ];

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a className="logo" href="#">
            <span>H</span>J.
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
            <span className="wave">
              <PiHandWaving fontSize="24px" />
            </span>{" "}
            Hello, I'm
          </div>
          <h1 className="hero-name">
            Manoa
            <br />
            <em>Nampoina HJ</em>
          </h1>
          <p className="hero-desc">
            I study the structure of things — from{" "}
            <strong>real analysis</strong> to
            <strong> computational number theory</strong>. Mathematics is how I
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

        <section id="selected-work">
          <div className="section-label">§ 02 — Selected works</div>
          <div className="project-list">
            {projects.map((p) => (
              <a key={p.num} href={p.href} className="project-row">
                <span className="p-num">{p.num}</span>
                <div className="p-body">
                  <span className="p-title">{p.title}</span>
                  <span className="p-desc">{p.desc}</span>
                  <div className="p-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="p-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-right">
                  <span className="p-year">{p.year}</span>
                  <span className="p-arrow">
                    <FaArrowRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="section-label">§ 03 — Tech Interest</div>

          <div className="skill-legend">
            <span className="leg-item">
              <span className="sk-dot dot-advanced" />
              Advanced
            </span>
            <span className="leg-item">
              <span className="sk-dot dot-proficient" />
              Proficient
            </span>
            <span className="leg-item">
              <span className="sk-dot dot-learning" />
              Learning
            </span>
          </div>

          <div className="skill-grid">
            {skills.map((s) => (
              <div key={s.num} className="skill-card">
                <div className="sk-top">
                  <span className="sk-num">{s.num}</span>
                  <span className={`sk-dot dot-${s.level}`} />
                </div>
                <span className="sk-title">{s.title}</span>
                <div className="sk-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="sk-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-label">§ 04 — Let's build</div>
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
                  manoa576@proton.me
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
                    <FaGithub />
                    GitHub — ma-noa
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@manoa_ramanantsoa"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaTiktok />
                    TikTok — @manoa_ramanantsoa
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
            <span className="footer-copy">
              © 2026 IRIMANOA Nampoina Hiarijaona
            </span>
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
