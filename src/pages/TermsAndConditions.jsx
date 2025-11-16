import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function TermsAndConditions() {
  const styles = {
    container: {
      width: "100%",
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
      margin: 0,
      padding: 0,
    },
    heroSection: {
      width: "100%",
      height: "300px",
      backgroundImage:
        "url('https://explorepakistanadventure.com/wp-content/uploads/2025/04/Hunza-Attabad-Naltar-990x490.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroHeading: {
      color: "#fff",
      fontSize: "48px",
      fontWeight: "700",
      textTransform: "uppercase",
      textShadow: "0 4px 8px rgba(0,0,0,0.5)",
    },
    scrollBox: {
      maxWidth: "900px",
      margin: "40px auto 0 auto",
      padding: "20px",
      height: "400px",
      overflowY: "auto",
      border: "1px solid #ddd",
      borderRadius: "10px",
      backgroundColor: "#fff",
      lineHeight: "1.6",
      fontSize: "16px",
    },
    tripsContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
      paddingBottom: "60px",
    },
    cardWrapper: {
      maxWidth: "360px",
      width: "100%",
    },
    card: {
      background: "#fff",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
    cardImage: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "20px 22px",
    },
    cardTitle: {
      fontSize: "1.15rem",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#1a1a1a",
    },
    cardDetails: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      marginBottom: "12px",
      fontSize: "0.9rem",
      color: "#444",
    },
    desc: {
      fontSize: "0.92rem",
      color: "#555",
      lineHeight: "1.5",
      marginBottom: "12px",
    },
    priceRow: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
    },
    price: {
      color: "#26B0A7",
      fontSize: "1.4rem",
      fontWeight: "700",
    },
    oldPrice: {
      textDecoration: "line-through",
      color: "#888",
      fontSize: "0.9rem",
    },
    btn: {
      display: "inline-block",
      background: "#26B0A7",
      color: "#fff",
      textDecoration: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      marginTop: "16px",
      textAlign: "center",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={styles.heroHeading}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Terms & Conditions
        </motion.h1>
      </motion.div>

      <div style={styles.scrollBox}>
        <p>
          <strong>Privacy and Policy</strong><br /><br />
          <strong>MAIN PICKUP POINTS</strong><br />
          Lahore: PSO Petrol Pump, Thokar Niaz Baig, Near Daewoo Bus Terminal<br />
          Islamabad/Rawalpindi: Daewoo Terminal, EME near NUST University<br /><br />

          <strong>CHILDREN POLICY</strong><br />
          Children under 3 years: Free of cost (lap or folding seat if available)<br />
          Children aged 3–8 years: Half charges (folding seat)<br />
          Children 8 years and above: Full charges<br /><br />

          <strong>SERVICES INCLUDED</strong><br />
          AC Private Transport (Coaster / Grand Cabin)<br />
          Quality hygienic food:<br />
          Breakfast: Paratha, Omelet, Chickpeas, Tea<br />
          Dinner: Chicken dish with Roti/Naan, Raita, Salad, Cold Drink or Tea<br />
          Bonfire Night<br />
          Fuel/Diesel/Toll Expenses<br />
          Professional Tour Guide<br />
          Hotel Accommodation (bed & mattresses)<br /><br />

          <strong>SERVICES NOT INCLUDED</strong><br />
          Personal expenses (cold drinks, mineral water, heater, lunch, etc.)<br />
          Extra expenses or vehicle charges due to road blockage<br />
          Jeep charges from Sharda to Kel<br />
          Kel chairlift charges<br />
          Anything not mentioned in the “Services Included” section<br /><br />

          <strong>ITEMS TO BRING WITH YOU</strong><br />
          CNIC (Compulsory)<br />
          Personal belongings<br />
          Warm winter clothing<br />
          Comfortable joggers<br />
          Jacket or shawl<br /><br />

          <strong>CANCELLATION POLICY</strong><br />
          Cancellation within 48 hours: 100% of advance amount charged<br />
          Cancellation more than 48 hours but less than 4 days: 50% of advance amount charged<br />
          Cancellation 4 days or more in advance: No charges<br />
          No refund if a person leaves the trip at any stage for any reason<br /><br />

          <strong>SEATS ARRANGEMENT POLICY</strong><br />
          Seats are assigned by tour management prior to departure and will rotate during the tour<br />
          Specific seat requests: Rs. 1000 per seat per day<br /><br />

          <strong>TERMS & CONDITIONS</strong><br />
          Participants must not engage in unethical or illegal behavior (misconduct, drug use, etc.); violation may result in removal from the trip without refund.<br />
          Prohibited items such as weapons are not allowed.<br />
          On mountainous roads, vehicle AC may be turned on/off to prevent overheating.<br />
          Trip itinerary may be altered due to weather, political, or other unforeseen circumstances; organizers will not be held responsible.<br />
          The company reserves the right to cancel the trip; full refund of advance will be provided in such cases.<br />
          Despite all precautions, natural disasters (e.g., avalanches, rockfalls) may occur; organizers will not be held liable for accidents.<br />
          Organizers are not responsible for theft, loss, or damage to personal belongings.<br />
          Environmental responsibility is mandatory. Any harm to nature will not be tolerated.<br />
          Trips are not insured; utmost safety and care are exercised but liability is limited.<br />
          Any form of conflict, violence, or disrespect towards cultures, religions, or beliefs is strictly prohibited and will be dealt with strictly.
        </p>
      </div>

      <div style={styles.tripsContainer}>
        <div style={styles.cardWrapper}>
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              style={styles.cardImage}
              src="\H.jpg"
              alt="Hunza Attabad Naltar"
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>
                Majestic Hunza, Naltar & Attabad Lake: A 5-Day Adventure Through Northern Pakistan’s Hidden Gems
              </h3>
              <div style={styles.cardDetails}>
                <span><FaMapMarkerAlt /> Attabad Lake, Hunza Valley, Naltar Valley</span>
                <span><FaClock /> 5 Days</span>
              </div>
              <p style={styles.desc}>
                Explore the natural beauty of Northern Pakistan with a trip to Hunza Valley, Naltar Valley, and Attabad Lake — all with Explore Pakistan Adventure.
              </p>
              <div style={styles.priceRow}>
                <div style={styles.price}>Rs 22,000</div>
                <div style={styles.oldPrice}>Rs 25,000</div>
              </div>
              
              <Link to="/attabad-lake" style={styles.btn}>
  View Details
</Link>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
