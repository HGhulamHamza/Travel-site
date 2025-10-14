import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <h3
      style={{
        fontSize: "2.8rem",
        fontWeight: "bold",
        color: "#26B0A7",
        marginBottom: "10px",
      }}
    >
      {target >= 1000 ? Math.floor(count / 1000) : count}
      {suffix}
    </h3>
  );
};

const About = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        background: "#fff",
      }}
    >
      {/* ✅ Hero Section */}
      <section
        style={{
          background: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url("https://explorepakistanadventure.com/wp-content/uploads/2025/04/Attabad-1-2-2048x1365.jpg")
            center/cover no-repeat`,
          textAlign: "center",
          padding: "160px 20px",
          color: "#fff",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem", marginBottom: "10px" }}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: "1.2rem", opacity: 0.9 }}
        >
          Your gateway to the most breathtaking destinations across Pakistan
        </motion.p>
      </section>

      {/* ✅ Intro Section */}
      <section style={sectionStyle}>
        <motion.h2
          style={headingStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Explore Pakistan Adventure
        </motion.h2>
        <p style={pStyle}>
          Welcome to Explore Pakistan Adventure, your gateway to the most
          breathtaking destinations across Pakistan. We are a passionate travel
          company dedicated to helping people explore the natural beauty,
          cultural richness, and hidden wonders of Pakistan in the most
          comfortable and exciting way.
        </p>
        <p style={pStyle}>
          From the snowy peaks of Hunza, Skardu, and Naltar, to the peaceful
          lakes of Attabad and the lush green valleys of Swat, Neelum, and
          Shogran, we create unforgettable travel experiences for every type of
          traveler. Whether you’re looking for an adventurous escape, a peaceful
          getaway, or a family trip, our expertly designed tours offer something
          for everyone.
        </p>
        <p style={pStyle}>
          Our team of local travel experts focuses on safety, comfort, and
          personalized service. We believe that travel should be easy, fun, and
          meaningful — and that’s exactly what we deliver. With well-organized
          itineraries, quality accommodation, and guided tours, we take care of
          everything so you can focus on making memories.
        </p>
        <p style={pStyle}>
          Join us on a journey through Pakistan like never before — full of
          wonder, adventure, and discovery.
        </p>
      </section>

      {/* ✅ UPDATED Stats Section */}
      <section
        style={{
          background: "#f0f7f6", // ✅ Soft background instead of image
          padding: "100px 20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: 1500, label: "Holiday Packages" },
            { value: 50, label: "Luxury Stays" },
            { value: 50, label: "Elite Airlines" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ minWidth: "200px" }}
            >
              <AnimatedCounter target={item.value} suffix="+" />
              <p style={{ marginTop: "10px", fontSize: "1rem" }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Exceptional Experience */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>A Truly Exceptional Experience</h2>
        <p style={pStyle}>
          We pride ourselves on a deep understanding of what makes a truly
          unforgettable travel experience. From the snow-capped peaks of Hunza
          and Skardu to the crystal-clear waters of Attabad Lake, the lush green
          meadows of Naltar and Shogran, and the cultural charm of Swat and
          Neelum Valley — every trip is carefully crafted to deliver comfort,
          beauty, and adventure.
        </p>
        <p style={pStyle}>
          Whether you’re seeking a peaceful escape into nature, a romantic
          getaway in the mountains, or an immersive journey through local
          culture and landscapes, our tour packages are designed to create
          lasting memories with elegance and ease.
        </p>
        <p style={pStyle}>
          At Explore Pakistan Adventure, we believe that travel is about more
          than just visiting new places—it’s about discovering new perspectives
          and crafting cherished memories.
        </p>
      </section>

      {/* ✅ Services */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {[
            {
              title: "Pick Up & Drop",
              desc: "VIP transfers with luxury vehicles",
            },
            {
              title: "Hotel & Room",
              desc: "Exclusive accommodations with 24/7 room service",
            },
            {
              title: "Honesty",
              desc: "Our fees are clearly mentioned — no hidden charges",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                background: "#f8f9fa",
                borderRadius: "10px",
                padding: "25px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <h3 style={{ color: "#26B0A7", marginBottom: "10px" }}>
                {s.title}
              </h3>
              <p style={pStyle}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Testimonial */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Voice from Our Guests</h2>
        <blockquote
          style={{
            fontStyle: "italic",
            color: "#444",
            lineHeight: "1.8",
            background: "#f7fafa",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
          }}
        >
          “Our 5-day trip to Hunza, Naltar, and Attabad Lake was truly a dream
          come true! From the comfortable travel arrangements, everything was
          incredibly well-managed. Highly recommended for anyone looking to
          explore the beauty of northern Pakistan!”
        </blockquote>
        <p style={{ marginTop: "10px", color: "#26B0A7", fontWeight: "600" }}>
          – Sajid Ali
        </p>
      </section>

      {/* ✅ Footer */}
      {/* <footer
        style={{
          background: "#26B0A7",
          color: "#fff",
          textAlign: "center",
          padding: "25px 10px",
          marginTop: "50px",
        }}
      >
        © Copyright 2025 Explore Pakistan Adventure.
      </footer> */}
    </div>
  );
};

/* ✅ Reusable Inline Styles */
const sectionStyle = {
  maxWidth: "1100px",
  margin: "80px auto",
  padding: "0 20px",
};

const headingStyle = {
  color: "#26B0A7",
  fontSize: "2rem",
  marginBottom: "20px",
  position: "relative",
};

const pStyle = {
  lineHeight: "1.8",
  color: "#555",
  marginBottom: "15px",
};

export default About;
