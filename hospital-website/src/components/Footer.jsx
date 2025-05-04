import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaAngleRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Our Services', 'Departments', 'Contact Us'];

  return (
    <footer>
      <style>{`
        .footer {
          background-color: #0d2240;
          color: #d1d9e6;
          padding: 60px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .footer .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }
        /* Column styles */
        .footer-col {
          flex: 1 1 280px;
          min-width: 280px;
        }
        /* Brand / About column */
        .footer-brand {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .footer-brand img {
          height: 48px;
          margin-right: 12px;
        }
        .footer-brand h4 {
          color: #58a6ff;
          font-weight: 700;
          font-size: 1.5rem;
          margin: 0;
        }
        .footer p.about-text {
          margin-bottom: 20px;
          color: #cbd5e1;
          font-size: 0.93rem;
        }
        /* Contact contacts */
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          color: #a8b4cc;
        }
        .contact-item svg {
          margin-right: 10px;
          color: #58a6ff;
          min-width: 20px;
          min-height: 20px;
        }
        /* Quick links column */
        .footer-links h5,
        .footer-address h5,
        .footer-social h5 {
          color: #58a6ff;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-bottom: 2px solid #1e3a8a;
          padding-bottom: 6px;
        }
        .footer-links a {
          display: flex;
          align-items: center;
          color: #cfd9f7;
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }
        .footer-links a svg {
          margin-right: 8px;
          color: #58a6ff;
        }
        .footer-links a:hover {
          color: #82aaff;
        }
        /* Address column */
        .footer-address p {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          color: #a8b4cc;
          font-size: 0.95rem;
        }
        .footer-address svg {
          margin-right: 10px;
          color: #58a6ff;
          min-width: 20px;
          min-height: 20px;
        }
        /* Social icons */
        .footer-social .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .footer-social .social-icons a {
          background-color: #1e3a8a;
          color: #cfd9f7;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 1.2rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .footer-social .social-icons a:hover {
          background-color: #58a6ff;
          color: #0d2240;
        }
        /* Responsive */
        @media (max-width: 992px) {
          .footer .container {
            justify-content: center;
          }
          .footer-col {
            flex: 1 1 350px;
          }
        }
        @media (max-width: 576px) {
          .footer {
            padding: 40px 15px;
          }
          .footer .container {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
          .footer-col {
            min-width: 100%;
          }
          .footer-links a,
          .footer-address p {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="footer" data-aos="fade-up">
        <div className="container">
          {/* Branding and Contact */}
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/img/dr_logo_cropped.png" alt="DR Hospital" />
              <h4>DR Hospital</h4>
            </div>
            <p className="about-text">
              RBMI Group is to be a partner in building India a world leader in Technical, Management, Pharmacy, Medical Education & Healthcare. Established in 2018, DR Hospital is a 100-Bed Critical Access Hospital in Bari Nagla, Near ITBP, Badaun Road, Bareilly.
            </p>
            <div className="contact-item"><FaPhone /> +91 9045954986</div>
            <div className="contact-item"><FaEnvelope /> info@drhospital.com</div>
          </div>

          {/* Quick Links */}
          <div className="footer-col footer-links" aria-label="Quick navigation links">
            <h5>Quick Links</h5>
            {quickLinks.map((link, idx) => (
              <a key={idx} href="#" tabIndex="0">
                <FaAngleRight />{link}
              </a>
            ))}
          </div>

          {/* Address and Social */}
          <div className="footer-col">
            <div className="footer-address" aria-label="Address and timings">
              <h5>Our Address</h5>
              <p><FaMapMarkerAlt /> RBMI Group, Bari Nagla, Bareilly</p>
              <p><FaClock /> Mon - Sat: 9 AM - 8 PM</p>
            </div>
            <div className="footer-social" aria-label="Social media links">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
