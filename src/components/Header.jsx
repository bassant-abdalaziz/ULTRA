import React from 'react'
import '../css/Header.css';
import Button from './Button';
const Header= ()=> {
  return (
    <div className="home">
    <div className="container">
        <div className="home-information">
            <h1 className="home-title margin-bottom">Bassant Abdalaziz</h1>
            <h3 className="home-info">Creative Director</h3>
            <p className="home-desc">
                Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </p>
            <Button>Let's Begin</Button>
        </div>
    </div>
</div>
  )
}

export default Header