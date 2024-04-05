import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import imagelogo from '../../../public/Concept_Group_logo.png';


const Header = () => {
  return (
    <header className="mainHeader">
      <div className="row">
        <div className="col-2 imagelogo">
          <Image className='' src={imagelogo} alt="Description of image"  />
        </div>
        <div className="col-10 d-flex align-items-center justify-content-end">
          <ul className='d-flex justify-content-center align-items-center mb-0'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="./elearn">E-Learning</Link></li>
            <li><Link href="#">Svagyan</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="./about">About Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
