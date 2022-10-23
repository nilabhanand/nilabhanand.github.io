import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div className="footer">
    
      <div className="footer-content">
      <button
            className="connect-btn"
            onClick={() => window.location = 'mailto:nilabhanand10@gmail.com'}
          >
            Let's Connect
          </button>
        <p>Built with passion by Nilabh Anand.</p>
        <p>All rights reserved. ©</p>
      </div>
    </div>
  );
}

export default Footer;
