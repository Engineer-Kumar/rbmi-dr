import React from 'react';

const Contact = () => {
  return (
    <section>
      <style>{`
        .contact-section {
          background: #f4f7fa;
          padding: 60px 20px;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .contact-section .container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-section h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #007bff;
          font-weight: 700;
        }

        .contact-info {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }

        .contact-info p {
          font-size: 1.1rem;
          margin: 10px 0;
          line-height: 1.6;
        }

        .contact-info strong {
          color: #007bff;
        }

        .contact-form {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Placeholder styles for the contact form */
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        .contact-form button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background: #0056b3;
        }
      `}</style>

      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Address:</strong> RBMI Group campus, Bari Nagla, Near ITBP, Budaun Road, Bareilly</p>
            <p><strong>Phone:</strong> +91 9045954986</p>
            <p><strong>Email:</strong> info@drhospital.com</p>
          </div>
          <div className="contact-form">
            {/* Add contact form here */}
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;