import React from 'react'
import "./hero.css"
import ClubLogo from "../../assets/Club_Logo.png"
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero-container">
       <div className="content">
        <div className="logo">
            <img src={ClubLogo} alt="Logo" />
        </div>
        <h1>Sosha South Performance Improvement App</h1>
        <div className="login-btn">
            <Link to="/coach/home">
                <Button colorScheme='red' size="lg">COACH SECTION</Button>
            </Link>
            <Link to ="/admin/home">
                <Button colorScheme='red' variant="outline" ml="2rem" size="lg">ADMIN SECTION</Button>
            </Link>
       </div>
       </div>
       
    </div>
  )
}

export default Hero
  
