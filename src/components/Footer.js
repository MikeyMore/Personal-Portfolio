import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/michael_0mg/'>
              <Instagram />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100012080319321'>
              <Facebook />
            </a>
            <a href='https://twitter.com/MichaelOMoreno1'>
              <Twitter />
            </a>
            <a href='https://www.linkedin.com/in/michael-moreno-640423252/'>
            <LinkedIn />
            </a>
        </div>
        <p>&copy; 2023 michaelbytes.net</p>
    </div>
  )
}

export default Footer;