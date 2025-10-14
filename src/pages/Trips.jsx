import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Trips = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .trips-page {
        margin-top:0px;
          font-family: 'Poppins', sans-serif;
          background-color: #f7f9fa;
          min-height: 100vh;
          padding-bottom: 80px;
          width:103%;
        }

        .trips-header {
          position: relative;
          width: 100%;
          height: 45vh;
          background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url('https://explorepakistanadventure.com/wp-content/uploads/2025/04/Hunza-Attabad-Naltar-990x490.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .trips-header h1 {
          font-size: 3rem;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          letter-spacing: 1px;
        }

        .trips-container {
          display: flex;
          justify-content: center;
          margin-top: -60px;
          padding: 0 20px;
          flex-wrap: wrap;
        }


        .trip-card {
        margin-top:130px;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          max-width: 360px;
          width: 100%;
        }

        .trip-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.15);
        }

        .trip-image {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .trip-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .trip-card:hover img {
          transform: scale(1.08);
        }

        .trip-content {
          padding: 20px 22px;
          color: #333;
        }

        .trip-title {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .trip-desc {
          font-size: 0.92rem;
          color: #555;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .trip-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
          color: #444;
          font-size: 0.9rem;
        }

        .trip-details span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trip-price {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-top: 8px;
        }

        .price {
          color: #26B0A7;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .old-price {
          text-decoration: line-through;
          color: #888;
          font-size: 0.9rem;
        }

        .trip-btn {
          display: inline-block;
          background: #26B0A7;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          margin-top: 16px;
          text-align: center;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .trip-btn:hover {
          background: #219c95;
        }

        @media (max-width: 768px) {
          .trips-header h1 {
            font-size: 2.2rem;
          }
          .trip-card {
            max-width: 90%;
          }
        }
      `}</style>

      <div className="trips-page">
        {/* Header Section */}
        <motion.div
          className="trips-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>All Trips</h1>
        </motion.div>

        {/* Trips Container */}
        <div className="trips-container">
          <motion.div
            className="trip-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="trip-image">
              <img
                src="https://explorepakistanadventure.com/wp-content/uploads/2025/04/Hunza-Attabad-Naltar-990x490.jpg"
                alt="Hunza Attabad Naltar"
              />
            </div>

            <div className="trip-content">
              <h3 className="trip-title">
                Majestic Hunza, Naltar & Attabad Lake: A 5-Day Adventure Through Northern Pakistan’s Hidden Gems
              </h3>

              <div className="trip-details">
                <span><FaMapMarkerAlt /> Attabad Lake, Hunza Valley, Naltar Valley</span>
                <span><FaClock /> 5 Days</span>
              </div>

              <p className="trip-desc">
                Explore the natural beauty of Northern Pakistan with a trip to Hunza Valley, Naltar Valley,
                and Attabad Lake — all with Explore Pakistan Adventure.
              </p>

              <div className="trip-price">
                <div className="price">Rs 22,000</div>
                <div className="old-price">Rs 25,000</div>
              </div>

              <a href="#" className="trip-btn">View Details</a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Trips;
