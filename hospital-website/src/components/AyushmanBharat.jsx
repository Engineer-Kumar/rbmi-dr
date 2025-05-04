import React from 'react';
import { FaUserCheck, FaRupeeSign, FaHospital, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Ayushman = () => {
  // Inline styles object
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#1e5799',
      color: 'white',
      borderRadius: '10px',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
    },
    section: {
      marginBottom: '50px',
      padding: '0 20px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#1e5799',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #eee',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    highlight: {
      color: '#1e5799',
      fontWeight: 'bold',
    },
    leadersContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '30px',
      flexWrap: 'wrap',
    },
    leaderCard: {
      textAlign: 'center',
      width: '200px',
    },
    leaderImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#ddd',
      margin: '0 auto',
      border: '5px solid #1e5799',
    },
    leaderName: {
      marginTop: '15px',
      color: '#1e5799',
    },
    hospitalSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      marginBottom: '50px',
    },
    hospitalImage: {
      flex: 1,
      minWidth: '300px',
      height: '300px',
      backgroundColor: '#ddd',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
    hospitalContent: {
      flex: 1,
      minWidth: '300px',
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      margin: '15px 0',
      fontSize: '1.1rem',
    },
    icon: {
      color: '#1e5799',
    },
    eligibilityCards: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
    },
    eligibilityCard: {
      flex: 1,
      minWidth: '250px',
      backgroundColor: '#f8f9fa',
      padding: '30px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    },
    cardIcon: {
      color: '#1e5799',
      marginBottom: '15px',
      fontSize: '40px',
    },
    agencyLogos: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
    },
    agencyLogo: {
      height: '80px',
      width: '150px',
      backgroundColor: '#ddd',
    },
    applySection: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    applyButton: {
      backgroundColor: '#1e5799',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      fontSize: '1.1rem',
      borderRadius: '50px',
      cursor: 'pointer',
      boxShadow: '0 3px 10px rgba(30, 87, 153, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Ayushman Bharat Yojana</h1>
        <p style={styles.subtitle}>Providing Free Health Coverage at DR Hospital</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is Ayushman Bharat Yojana?</h2>
        <p style={styles.paragraph}>
          Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PMJAY) is a healthcare initiative by the Government of India to provide 
          <span style={styles.highlight}> free health insurance</span> to economically vulnerable Indians. It covers medical expenses up to 
          <span style={styles.highlight}> ₹5 lakh per family per year</span>.
        </p>
        
        <div style={styles.leadersContainer}>
          <div style={styles.leaderCard}>
            <div style={styles.leaderImage}></div>
            <h3 style={styles.leaderName}>Shri Narendra Modi</h3>
          </div>
          <div style={styles.leaderCard}>
            <div style={styles.leaderImage}></div>
            <h3 style={styles.leaderName}>Shri Yogi Adityanath</h3>
          </div>
        </div>
      </section>

      <section style={styles.hospitalSection}>
        <div style={styles.hospitalImage}></div>
        <div style={styles.hospitalContent}>
          <h2 style={styles.sectionTitle}>About DR Hospital</h2>
          <p style={styles.paragraph}>
            DR Hospital is a <span style={styles.highlight}>multi-specialty healthcare center</span> providing 
            <span style={styles.highlight}> advanced medical treatments</span> under the Ayushman Bharat scheme. 
            We ensure quality healthcare services with modern infrastructure and experienced doctors.
          </p>
          <p style={styles.contactInfo}>
            <FaMapMarkerAlt style={styles.icon} /> <strong>Address:</strong> XYZ Road, City, State
          </p>
          <p style={styles.contactInfo}>
            <FaPhone style={styles.icon} /> <strong>Contact:</strong> +91 98765 43210
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Who is Eligible?</h2>
        <div style={styles.eligibilityCards}>
          <div style={styles.eligibilityCard}>
            <FaUserCheck style={styles.cardIcon} />
            <p>Families listed in SECC 2011 database</p>
          </div>
          <div style={styles.eligibilityCard}>
            <FaRupeeSign style={styles.cardIcon} />
            <p>Low-income households (BPL families)</p>
          </div>
          <div style={styles.eligibilityCard}>
            <FaHospital style={styles.cardIcon} />
            <p>Senior citizens, disabled persons & women</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Partnering Agencies</h2>
        <div style={styles.agencyLogos}>
          <div style={styles.agencyLogo}></div>
          <div style={styles.agencyLogo}></div>
          <div style={styles.agencyLogo}></div>
        </div>
      </section>

      <section style={styles.applySection}>
        <h2 style={styles.sectionTitle}>Apply for Ayushman Bharat</h2>
        <p style={styles.paragraph}>Visit DR Hospital with valid documents to check eligibility and register for the scheme.</p>
        <button style={styles.applyButton}>Apply Now</button>
      </section>
    </div>
  );
};

export default Ayushman;