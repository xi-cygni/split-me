import React from "react";

import './Footer.style.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Maintained with care in {year}</p>
    </footer>
  );
}

export default Footer;