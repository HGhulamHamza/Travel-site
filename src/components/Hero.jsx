import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleSearch = () => {
    alert(`Searching for: ${location || "Anywhere"}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        /* ✅ HERO SECTION */
        .hero {
          padding-top: 160px;
          position: relative;
          width: 100%;
          height: 100vh;
       
          
          font-family: 'Poppins', sans-serif;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          color: white;
          padding-left: 6%;
          z-index: 1; /* below navbar */
        }
          .hero {
  position: relative;
  z-index: 1;
}
.hero-overlay,
.hero-video {
  z-index: 0;
}


        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0; /* background */
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.35)
          );
          z-index: 0; /* background overlay */
        }

        .hero-inner {
          position: relative;
          z-index: 2; /* content above overlay */
          width: 90%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 14px;
        }

        .hero h1 {
          font-size: 3.2rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }

        .hero p {
          font-size: 1.2rem;
          font-weight: 400;
          color: #f1f1f1;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.35);
        }

        .hero strong {
          font-weight: 600;
          color: #fff;
          text-shadow: 0 3px 10px rgba(0,0,0,0.4);
        }

        /* ✅ SEARCH BOX */
        .search-box {
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          padding: 16px 22px;
          border-radius: 60px;
          box-shadow: 0 8px 30px rgba(3, 18, 35, 0.15);
          max-width: 900px;
          width: 100%;
        }

        .search-segment {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 160px;
          align-items: flex-start;
        }

        .seg-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #222;
        }

        .seg-bottom {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555;
        }

        select.search-dropdown {
          border: none;
          outline: none;
          font-size: 1rem;
          font-weight: 600;
          color: #222;
          background: transparent;
          cursor: pointer;
        }

        .picker {
          border: none;
          background: transparent;
          font-weight: 600;
          cursor: pointer;
          color: #222;
          outline: none;
        }

        .divider {
          width: 1px;
          height: 50px;
          background: rgba(0,0,0,0.08);
        }

        .search-button {
          background: #26B0A7;
          color: white;
          border: none;
          padding: 16px 34px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(38,176,167,0.25);
          transition: 0.2s ease;
        }

        .search-button:hover {
          transform: translateY(-2px);
          background: #219c95;
        }

        /* ✅ RESPONSIVE DESIGN */
        @media (max-width: 980px) {
          .hero {
            padding-left: 5%;
          }
          .hero h1 {
            font-size: 2.4rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .search-box {
            flex-wrap: wrap;
            border-radius: 24px;
            justify-content: center;
            gap: 10px;
            padding: 14px;
          }
          .divider { display: none; }
        }

        @media (max-width: 600px) {
          .hero {
            padding-left: 5%;
          }
          .hero h1 {
            font-size: 2rem;
          }
          .search-box {
            flex-direction: column;
            align-items: stretch;
            border-radius: 20px;
            padding: 16px;
            width: 95%;
          }
          .search-button {
            width: 100%;
            border-radius: 12px;
            margin-top: 6px;
          }
        }
      `}</style>

      <section className="hero">
        {/* Background video */}
        <video
          src="/19803831-uhd_3840_2160_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Explore Pakistan Adventure</h1>
          <p>Discover, Explore, Experience!</p>
          <p><strong>Start Your Amazing Holiday</strong></p>

          <motion.div
            className="search-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {/* Location */}
            <div className="search-segment">
              <div className="seg-top"><FaMapMarkerAlt /> Location</div>
              <div className="seg-bottom">
                <select
                  className="search-dropdown"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Where are you going?</option>
                  <option value="Attabad Lake">Attabad Lake</option>
                  <option value="Hunza Valley">Hunza Valley</option>
                  <option value="Naltar Valley">Naltar Valley</option>
                </select>
              </div>
            </div>

            <div className="divider" />

            {/* Check-in */}
            <div className="search-segment">
              <div className="seg-top"><FaCalendarAlt /> Date</div>
              <div className="seg-bottom">
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => {
                    setCheckIn(date);
                    if (checkOut && date && checkOut <= date) setCheckOut(null);
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="dd/MM/yyyy HH:mm"
                  placeholderText="Select check-in"
                  className="picker"
                />
              </div>
            </div>

            <div className="divider" />

            {/* Check-out */}
            <div className="search-segment">
              <div className="seg-top">Check out</div>
              <div className="seg-bottom">
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="dd/MM/yyyy HH:mm"
                  placeholderText="Select check-out"
                  minDate={checkIn || null}
                  className="picker"
                />
              </div>
            </div>

            <button className="search-button" onClick={handleSearch}>Search</button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
