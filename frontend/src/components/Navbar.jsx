import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCareerDialog, setShowCareerDialog] = useState(false);

  const handleCareerClick = (e) => {
    e.preventDefault();
    setShowCareerDialog(true);
    setMobileMenuOpen(false);
  };

  const closeDialog = () => {
    setShowCareerDialog(false);
  };

  return (
    <>
      <header className="navbar-header">
        <div className="nav-container">
          <div className="nav-brand">
            <NavLink to="/" className="brand-logo">
              <span className="logo-text">CODE CORTEX</span>
            </NavLink>
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          
          <nav className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            <NavLink to="/" end className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <a href="#" className="nav-link" onClick={handleCareerClick}>
              Career
            </a>
            <NavLink to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Career Coming Soon Dialog */}
      {showCareerDialog && (
        <div className="career-dialog-overlay" onClick={closeDialog}>
          <div className="career-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="career-dialog-close" onClick={closeDialog} aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
            <div className="career-dialog-content">
              <div className="career-dialog-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h2>Career Opportunities</h2>
              <p>We're currently building our careers page. Check back soon for exciting job opportunities!</p>
              <div className="career-dialog-footer">
                <button onClick={closeDialog} className="career-dialog-btn">
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
