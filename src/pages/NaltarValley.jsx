import React from "react";
import { motion } from "framer-motion";

const NaltarValley = () => {
  return (
    <>
      <style>{`
        .destination-page {
          padding: 120px 10%;
          font-family: 'Poppins', sans-serif;
          background: #f9f9f9;
          min-height: 100vh;
        }
        .destination-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .destination-header h1 {
          font-size: 2.8rem;
          color: #26B0A7;
          font-weight: 700;
          position: relative;
        }
        .destination-header h1::after {
          content: "";
          width: 80px;
          height: 3px;
          background: #26B0A7;
          display: block;
          margin: 12px auto 0;
          border-radius: 4px;
        }
        .trip-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 18px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          max-width: 900px;
          margin: 0 auto;
        }
        .trip-card img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }
        .trip-content {
          padding: 25px 30px;
        }
        .trip-content h2 {
          font-size: 1.8rem;
          color: #222;
          margin-bottom: 10px;
        }
        .trip-info {
          display: flex;
          justify-content: space-between;
          font-size: 1rem;
          color: #555;
          margin-bottom: 15px;
        }
        .trip-price {
          color: #26B0A7;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .trip-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #444;
        }
      `}</style>

      <section className="destination-page">
        <div className="destination-header">
          <h1>Naltar Valley Expedition</h1>
        </div>

        <motion.div
          className="trip-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://explorepakistanadventure.com/wp-content/uploads/2025/04/Hunza-Attabad-Naltar-990x490.jpg" alt="Naltar Valley" />
          <div className="trip-content">
            <h2>Naltar Valley Tour</h2>
            <div className="trip-info">
              <span>5 Days</span>
              <span>Naltar, Gilgit</span>
            </div>
            <div className="trip-price">Rs. 23,000</div>
            <p className="trip-desc">
              Discover Naltar Valley — known for its colorful lakes, snowy peaks, and ski resort charm.
              This 5-day adventure combines scenic drives, mountain serenity, and hidden trails.
              Perfect for those seeking peace, photography, and natural beauty at its best.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default NaltarValley;
