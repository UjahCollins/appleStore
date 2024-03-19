import React from 'react'
import "./Header.css"
import apple from "./Images/apple.png"
import seach from "./Images/search (2).png"
import stor from "./Images/shopping-bag.png"
import menu from "./Images/hamburger.png"

const Header = () => {
  return (
    <div className='mainConatiner'>
      <div className='container'>
            <div className='apple'>
               <img src={apple} alt="apple" />
             </div>
             <div className='navList'>
               <nav>Store</nav>
                <nav>Mac</nav>
                <nav>iPhone</nav>
                <nav>iPad</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>Entertainment</nav>
                <nav>Accessories</nav>
                <nav>Support</nav>
              </div>
        <div className='logo'>
          <img src={seach} alt="" />
          <img src={stor} alt="" />
        </div>
        <div className='menuu'>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
