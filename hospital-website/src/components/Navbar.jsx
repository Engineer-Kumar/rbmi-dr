import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    'Medicine', 'Surgery', 'Obstetrics & Gynaecology', 
    'Orthopaedics & Trauma', 'Ophthalmology', 'Dental', 
    'Radiology', 'OPD', 'Operation Theatre', 'Lab Services', 
    'Emergency', 'Physiotherapy', 'Dermatology', 
    'X-Ray', 'Ultrasound', 'Pathology'
  ];

  // Function to sanitize service string for URL
  const serviceToUrl = (service) => {
    return service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Navbar with vibrant light color theme */

      .navbar {
        background: linear-gradient(90deg, #a8edea, #fed6e3);
        box-shadow: 0 4px 10px rgba(255, 182, 193, 0.4);
        position: sticky;
        top: 0;
        z-index: 1000;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .navbar-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      .navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
      }

      .navbar-brand {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #5a2a83;
        font-weight: 700;
        transition: color 0.3s ease;
      }
      .navbar-brand:hover {
        color: #833ab4;
      }

      .navbar-logo {
        height: 48px;
        margin-right: 0.75rem;
        filter: drop-shadow(0 0 2px #e38b8b);
        transition: transform 0.3s ease;
      }
      .navbar-logo:hover {
        transform: rotate(10deg) scale(1.05);
      }

      .navbar-title {
        font-size: 1.7rem;
        letter-spacing: 1.5px;
        text-shadow: 0 0 5px #b184cc;
      }

      .navbar-mobile-toggle {
        display: none;
      }

      .navbar-toggle-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.8rem;
        color: #5a2a83;
        transition: color 0.3s ease;
      }
      .navbar-toggle-button:hover {
        color: #833ab4;
      }

      .navbar-links {
        display: flex;
        align-items: center;
      }

      .navbar-link {
        margin: 0 1rem;
        text-decoration: none;
        color: #6b2d8c;
        font-size: 1.1rem;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 24px;
        transition: background-color 0.3s ease, color 0.3s ease;
        box-shadow: 0 0 6px #ecc0fa88;
      }

      .navbar-link:hover {
        background-color: #833ab4;
        color: #fff;
        box-shadow: 0 0 10px #59278e;
      }

      .navbar-dropdown {
        position: relative;
      }

      .navbar-dropdown-toggle {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0 1rem;
        user-select: none;
        font-weight: 600;
        font-size: 1.1rem;
        color: #6b2d8c;
        padding: 6px 10px;
        border-radius: 24px;
        transition: background-color 0.3s ease, color 0.3s ease;
        box-shadow: 0 0 6px #ecc0fa88;
      }
      .navbar-dropdown-toggle:hover {
        background-color: #833ab4;
        color: #fff;
        box-shadow: 0 0 10px #59278e;
      }

      .dropdown-icon {
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
        color: #7d4099;
      }

      .dropdown-icon.rotate {
        transform: rotate(180deg);
      }

      .navbar-dropdown-menu {
        display: none;
        position: absolute;
        top: 110%;
        left: 0;
        background-color: #f7e8ff;
        box-shadow: 0 6px 16px rgba(131, 58, 180, 0.4);
        border-radius: 8px;
        z-index: 1000;
        min-width: 210px;
        padding: 0.5rem 0;
        backdrop-filter: saturate(180%) blur(8px);
      }

      .navbar-dropdown-menu.active {
        display: block;
        animation: fadeInScale 0.25s ease forwards;
      }

      .navbar-dropdown-link {
        display: block;
        padding: 0.75rem 1.25rem;
        text-decoration: none;
        color: #5a2a83;
        white-space: nowrap;
        transition: background-color 0.3s, color 0.3s;
        font-weight: 600;
      }

      .navbar-dropdown-link:hover {
        background-color: #833ab4;
        color: #fff;
        box-shadow: inset 0 0 10px #aa80f0;
      }

      @keyframes fadeInScale {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* Responsive */
      @media (max-width: 768px) {
        .navbar-mobile-toggle {
          display: block;
        }

        .navbar-links {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #fff0ff;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 1rem 2rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
          box-shadow: 0 6px 18px rgba(131,58,180,0.15);
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        .navbar-links.active {
          max-height: 1000px;
        }

        .navbar-link, 
        .navbar-dropdown-toggle {
          margin: 0.6rem 0;
          width: 100%;
          font-size: 1.2rem;
          border-radius: 30px;
          padding: 12px 16px;
          box-shadow: 0 0 12px #d6b3ff88;
          background: linear-gradient(90deg,#f3d9ff 0%,#c8a2ff 100%);
          color: #4b006e;
          font-weight: 700;
          transition: background 0.3s, color 0.3s;
        }

        .navbar-link:hover,
        .navbar-dropdown-toggle:hover {
          background: linear-gradient(90deg,#833ab4 0%,#4b006e 100%);
          color: #fff;
          box-shadow: 0 0 18px #7332c4;
        }

        .navbar-dropdown-menu {
          position: static;
          box-shadow: none;
          background-color: transparent;
          border-radius: 0;
          padding-left: 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .navbar-dropdown-menu.active {
          max-height: 1000px;
        }

        .navbar-dropdown-link {
          padding: 0.5rem 0;
          color: #5a2a83;
          font-weight: 600;
          background: transparent;
          box-shadow: none;
        }

        .navbar-dropdown-link:hover {
          color: #833ab4;
          background: transparent;
          box-shadow: none;
        }

        .navbar-logo:hover {
          transform: none;
          filter: drop-shadow(0 0 0 #000);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <img 
             src="./assets/images/img/drfront.jpeg" 
              alt="DR Hospital" 
              className="navbar-logo" 
            />
            <h2 className="navbar-title">DR Hospital</h2>
          </Link>
          
          <div className="navbar-mobile-toggle">
            <button 
              onClick={toggleMenu} 
              className="navbar-toggle-button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="navbar-dropdown">
              <div 
                className="navbar-dropdown-toggle"
                onClick={() => toggleDropdown('about')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'about'}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if(e.key === 'Enter' || e.key === ' ') toggleDropdown('about');
                }}
              >
                <span>About</span>
                <FaChevronDown className={`dropdown-icon ${activeDropdown === 'about' ? 'rotate' : ''}`} />
              </div>
              <div className={`navbar-dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
                <Link 
                  to="/about/mission" 
                  className="navbar-dropdown-link"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Our Mission
                </Link>
                <Link 
                  to="/about/vision" 
                  className="navbar-dropdown-link"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Our Vision
                </Link>
                <Link 
                  to="/about/team" 
                  className="navbar-dropdown-link"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Our Team
                </Link>
              </div>
            </div>
            
            <div className="navbar-dropdown">
              <div 
                className="navbar-dropdown-toggle"
                onClick={() => toggleDropdown('services')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if(e.key === 'Enter' || e.key === ' ') toggleDropdown('services');
                }}
              >
                <span>Services</span>
                <FaChevronDown className={`dropdown-icon ${activeDropdown === 'services' ? 'rotate' : ''}`} />
              </div>
              <div className={`navbar-dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                {services.map((service) => (
                  <Link 
                    key={service} 
                    to={`/services/${serviceToUrl(service)}`} 
                    className="navbar-dropdown-link"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/clinical-updates" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Clinical Updates
            </Link>
            <Link 
              to="/ayushman" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Ayushman Bharat
            </Link>
            <Link 
              to="/contact" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
