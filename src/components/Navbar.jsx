import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const DESTINATIONS = [
  { name: "Attabad Lake", path: "/attabad-lake" },
  { name: "Hunza Valley", path: "/hunza-valley" },
  { name: "Naltar Valley", path: "/naltar-valley" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const destRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (destRef.current && !destRef.current.contains(e.target)) {
        setDestOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
     <style>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  font-family: 'Poppins', sans-serif;
}

/* ---------- NAVBAR WRAPPER ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* always on top of everything */
  background: transparent;
}

/* ---------- TOP BAR ---------- */
.topbar {
  background: linear-gradient(90deg, #2eb9b3, #20a99f);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 28px;
  font-size: 14px;
  flex-wrap: wrap;
  gap: 8px;
}

.topbar-left,
.topbar-right {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.topbar .socials {
  display: flex;
  gap: 12px;
  align-items: center;
}

.topbar .socials a {
  color: #fff;
  font-size: 16px;
  transition: 0.3s;
}

.topbar .socials a:hover {
  color: #e0f7f5;
  transform: scale(1.1);
}

.topbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

/* ---------- MAIN NAV ---------- */
.nav-main {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 36px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.logo img {
  height: 55px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 26px;
  align-items: center;
  font-weight: 500;
  color: #333;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
  font-size: 15px;
}

.nav-links a:hover {
  color: #26B0A7;
}

/* ---------- DROPDOWN ---------- */
.dest-container {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 42px;
  left: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  min-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 10000; /* stays above hero section */
}

.dropdown a {
  display: block;
  padding: 12px 14px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: background 0.3s, color 0.3s;
}

.dropdown a:hover {
  background: #f6f6f6;
  color: #26B0A7;
}

/* ---------- MOBILE MENU ---------- */
.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 26px;
  color: #333;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  z-index: 11000;
  padding: 18px 22px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-row {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mobile-row a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  font-size: 16px;
}

.mobile-row a:hover {
  color: #26B0A7;
}

/* ---------- RESPONSIVE STYLING ---------- */
@media (max-width: 992px) {
  .nav-main {
    padding: 12px 18px;
  }

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .logo img {
    height: 50px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 18px;
    font-size: 13px;
  }

  .topbar-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .topbar-right {
    align-self: flex-end;
    font-size: 13px;
  }
}

/* ---------- SMALLER SCREENS ---------- */
@media (max-width: 576px) {
  .topbar {
    font-size: 12px;
    padding: 10px 14px;
  }

  .nav-main {
    padding: 10px 14px;
  }

  .logo img {
    height: 45px;
  }

  .mobile-menu {
    padding: 14px 18px;
  }

  .mobile-row a {
    font-size: 15px;
  }
}

`}</style>


      <header className="navbar">
        {/* Top bar */}
        <div className="topbar">
          <div className="topbar-left">
            <div className="socials">
              <a href="https://www.facebook.com/explorepakistanadventures" aria-label="facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/explorepakistanadventure" aria-label="instagram"><FaInstagram /></a>
              <a href="https://www.youtube.com/@explorepakistanadventure" aria-label="youtube"><FaYoutube /></a>
              <a href="https://www.tiktok.com/@explorepakistanadventure" aria-label="tiktok"><FaTiktok /></a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaPhone /> +92 300 1115716
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <FaEnvelope />
              <a href="mailto:info@explorepakistanadventure.com">
                info@explorepakistanadventure.com
              </a>
            </div>
          </div>

          <div className="topbar-right">
            Follow us on social for updates
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="nav-main">
          <div className="logo">
            <Link to="/">
              <img
                src="public\Logo.png"
                alt="Explore Pakistan Adventure"
              />
            </Link>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trips">Trips</Link></li>

            <li className="dest-container" ref={destRef}>
              <div
                onClick={() => setDestOpen(!destOpen)}
                style={{ cursor: "pointer" }}
              >
                Destinations ▾
              </div>

              <AnimatePresence>
                {destOpen && (
                  <motion.div
                    className="dropdown"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {DESTINATIONS.map((d) => (
                      <Link
                        key={d.name}
                        to={d.path}
                        onClick={() => setDestOpen(false)}
                      >
                        {d.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mobile-row">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/trips" onClick={() => setMenuOpen(false)}>Trips</Link>
                <div onClick={() => setDestOpen(!destOpen)} style={{ fontWeight: 600, cursor: "pointer" }}>
                  Destinations ▾
                </div>
                {destOpen && DESTINATIONS.map((d) => (
                  <Link key={d.name} to={d.path} onClick={() => setMenuOpen(false)}>
                    {d.name}
                  </Link>
                ))}
                <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                <Link to="/terms" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
