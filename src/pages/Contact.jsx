// Contact.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    msg: "",
  });

  // Inject responsive CSS once on mount (clean removal on unmount)
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-from", "contact-responsive");
    style.innerHTML = `
      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .contact-left { order: 1; }
        .contact-right { order: 2; }
        .contact-hero h1 { font-size: 2.2rem !important; }
        .contact-hero { padding: 90px 15px !important; }
        .contact-map iframe { height: 300px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      const existing = document.head.querySelector('style[data-from="contact-responsive"]');
      if (existing) existing.remove();
    };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Enter a valid email";
    }
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (
      form.message &&
      form.message.trim().length > 0 &&
      form.message.trim().length < 10
    )
      e.message = "Message must be at least 10 characters";
    if (form._honey && form._honey.trim().length > 0) e._honey = "Spam detected";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSnack({
        open: true,
        severity: "error",
        msg: "Fill the form first",
      });
      return;
    }

    setSending(true);
    try {
      const endpoint =
        "https://formsubmit.co/ajax/info@explorepakistanadventure.com";
      const fd = new FormData();
      fd.append("name", form.name.trim());
      fd.append("email", form.email.trim());
      fd.append("subject", form.subject.trim());
      fd.append("message", form.message.trim());
      fd.append("_honey", form._honey);
      fd.append("_captcha", "false");
      fd.append("_subject", `Contact Form: ${form.subject.trim()}`);
      fd.append("_replyto", form.email.trim());

      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error((data && data.message) || "Submission failed");
      }

      setSnack({
        open: true,
        severity: "success",
        msg: "Your message has been sent successfully!",
      });
      setForm({ name: "", email: "", subject: "", message: "", _honey: "" });
      setErrors({});
    } catch (err) {
      console.error("Form submit error:", err);
      setSnack({
        open: true,
        severity: "error",
        msg:
          "Something went wrong while sending your message. Please try again or email info@explorepakistanadventure.com directly.",
      });
    } finally {
      setSending(false);
    }
  };

  const closeSnack = () =>
    setSnack((s) => ({
      ...s,
      open: false,
    }));

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        background: "#fff",
      }}
    >
      {/* Hero */}
      <section
        className="contact-hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://explorepakistanadventure.com/wp-content/uploads/2025/04/Attabad-1-2-2048x1365.jpg") center/cover no-repeat`,
          padding: "120px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem", margin: 0 }}
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Contact area */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Left content */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ padding: "10px 0" }}
          >
            <h2
              style={{
                color: "#26B0A7",
                fontSize: "2rem",
                marginBottom: "15px",
              }}
            >
              Get in Touch
            </h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              We’d love to hear from you. Whether you have questions about our
              tours, want a custom itinerary, or need help with booking — drop
              us a message and our team will respond promptly.
            </p>

            <div style={{ marginTop: "20px" }}>
              <p style={{ margin: "8px 0", fontWeight: 600 }}>Address</p>
              <p style={{ margin: 0, color: "#555" }}>
                Explore Pakistan Adventure
                <br />
                Lahore, Pakistan
              </p>

              <p style={{ margin: "12px 0 8px 0", fontWeight: 600 }}>Email</p>
              <p style={{ margin: 0, color: "#555" }}>
                <a
                  href="mailto:info@explorepakistanadventure.com"
                  style={{
                    color: "#26B0A7",
                    textDecoration: "none",
                  }}
                >
                  info@explorepakistanadventure.com
                </a>
              </p>

              <p style={{ margin: "12px 0 8px 0", fontWeight: 600 }}>Phone</p>
              <p style={{ margin: 0, color: "#555" }}>+92 300 0000000</p>

              <div
                style={{
                  marginTop: "18px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "#26B0A7",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  style={{
                    color: "#26B0A7",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Instagram
                </a>
                <a
                  href="#"
                  style={{
                    color: "#26B0A7",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "22px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={handleChange}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? "#ff6b6b" : "#e6e9ee",
                  }}
                />
                {errors.name && <div style={errorStyle}>{errors.name}</div>}
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? "#ff6b6b" : "#e6e9ee",
                  }}
                />
                {errors.email && <div style={errorStyle}>{errors.email}</div>}
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>Subject *</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  style={{
                    ...inputStyle,
                    borderColor: errors.subject ? "#ff6b6b" : "#e6e9ee",
                  }}
                />
                {errors.subject && (
                  <div style={errorStyle}>{errors.subject}</div>
                )}
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={labelStyle}>Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message (optional, min 10 chars if provided)"
                  rows={5}
                  style={{
                    ...textareaStyle,
                    borderColor: errors.message ? "#ff6b6b" : "#e6e9ee",
                  }}
                />
                {errors.message && (
                  <div style={errorStyle}>{errors.message}</div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    background: "#26B0A7",
                    color: "#fff",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    cursor: sending ? "not-allowed" : "pointer",
                    fontWeight: 700,
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                <div style={{ color: "#777", fontSize: "0.95rem" }}>
                  Or email:{" "}
                  <a
                    href="mailto:info@explorepakistanadventure.com"
                    style={{ color: "#26B0A7" }}
                  >
                    info@explorepakistanadventure.com
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        <div
          className="contact-map"
          style={{
            marginTop: "38px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
          }}
        >
          <iframe
            title="Lahore Map"
            src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            frameBorder="0"
            style={{ border: 0, display: "block" }}
            allowFullScreen
          />
        </div>
      </section>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={closeSnack}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={closeSnack} severity={snack.severity} sx={{ width: "100%" }}>
          {snack.msg}
        </Alert>
      </Snackbar>

      <footer
        style={{
          background: "#26B0A7",
          color: "#fff",
          textAlign: "center",
          padding: "25px 10px",
          marginTop: "50px",
        }}
      >
        © Copyright 2025 Explore Pakistan Adventure. Made by Nuvayra
      </footer>
    </div>
  );
};

/* Inline styles */
const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 600,
  color: "#333",
};
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #e6e9ee",
  outline: "none",
  fontSize: "0.95rem",
  boxSizing: "border-box",
};
const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  minHeight: "110px",
  fontFamily: "inherit",
};
const errorStyle = {
  marginTop: "6px",
  color: "#ff6b6b",
  fontSize: "0.88rem",
};

export default Contact;
