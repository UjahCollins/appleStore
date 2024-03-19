import React from 'react'
import "./Heroes.css"
import mainpic from "./Images/hereos.png"
import Card from './Card'
import card1 from "./Images/card1.jpg"
import card2 from "./Images/card2.jpg"
import card3 from "./Images/card3.jpg"
import card4 from "./Images/card4.jpg"
import card5 from "./Images/card5.jpg"
import card6 from "./Images/card6.jpg"
const Heroes = () => {
  return (
    <div className='mainContainer'>
      <div className='hereospage'>
          <div className='mainTxt'>
              <h1>MacBook Pro</h1>
              <h4>Mind Blowing. Head-turning</h4>
              <h5>Learn more > <span>Buy > </span></h5>
          </div>
          
      </div>
      <div className='hereospage2'>
          <div className='mainTxt'>
              <h1>iMac</h1>
              <h4>Packed with more Juice</h4>
              <h5>Learn more > <span>Buy > </span></h5>
          </div>
          
      </div>
      <div className='hereospage3'>
      <div className='mainTxt'>
              <h1>iPhone 15 Pro</h1>
              <h4>Titanum. So strong. So Light. So Pro</h4>
              <h5>Learn more > <span>Buy > </span></h5>
          </div>
      </div>
      <div className='hereospage4'> 
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card1}  />
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card2}  />
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card3}  />
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card4}  />
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card5}  />
          <Card mtxt="iPhone 15" ntxt="New Camera. New Design. NewPhoria." crad= {card6}  />
      </div>
      <div className='footer'>
         <div className='footerA'>
         <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. <br /> </p>
          <p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch. <br /></p>
          <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card. <br /></p>
          <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218. <br /></p>
          <p>A subscription is required for Apple TV+.</p>
         </div>
         <div className='footerB'>
            <div className='colum1'>
              <div className='colum1a'>
                <p>Shop and Learn</p>
                <nav>Store</nav>
                <nav>Mac</nav>
                <nav>ipad</nav>
                <nav>iPhone</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>AirTag</nav>
                <nav>Accessories</nav>
                <nav>Gift Cards</nav>
              </div>
              <div className='colum1b'>
                <p>Apple Wallet</p>
                <nav>Wallet</nav>
                <nav>Apple Card</nav>
                <nav>Apple Pay</nav>
                <nav>Apple Cash</nav>
              </div>
            </div>
            <div className='colum1'>
              <div className='colum1a'>
                <p>Account</p>
                <nav>Manage Your Apple ID</nav>
                <nav>Apple Store Account</nav>
                <nav>iCloud.com</nav>
                
              </div>
              <div className='colum1b'>
                <p>Apple One</p>
                <nav>Apple TV+</nav>
                <nav>Apple Music</nav>
                <nav>Apple Arcade</nav>
                <nav>Apple Fitness+</nav>
                <nav>Apple News+</nav>
                <nav>Apple Podcasts</nav>
                <nav>Apple Books</nav>
                <nav>App Store</nav>
                <nav>App+</nav>
                <nav>AirTag</nav>
                <nav>Accessories</nav>
                <nav>Gift Cards</nav>
              </div>
            </div>
            <div className='colum1'>
              <div className='colum1a'>
                <p>Shop and Learn</p>
                <nav>Store</nav>
                <nav>Mac</nav>
                <nav>ipad</nav>
                <nav>iPhone</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>AirTag</nav>
                <nav>Accessories</nav>
                <nav>Gift Cards</nav>
              </div>
              <div className='colum1b'>
                <p>Apple Wallet</p>
                <nav>Wallet</nav>
                <nav>Apple Card</nav>
                <nav>Apple Pay</nav>
                <nav>Apple Cash</nav>
              </div>
            </div>
            <div className='colum1'>
              <div className='colum1a'>
                <p>Shop and Learn</p>
                <nav>Store</nav>
                <nav>Mac</nav>
                <nav>ipad</nav>
                <nav>iPhone</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>AirTag</nav>
                <nav>Accessories</nav>
                <nav>Gift Cards</nav>
              </div>
              <div className='colum1b'>
                <p>Apple Wallet</p>
                <nav>Wallet</nav>
                <nav>Apple Card</nav>
                <nav>Apple Pay</nav>
                <nav>Apple Cash</nav>
              </div>
            </div>
            <div className='colum1'>
              <div className='colum1a'>
                <p>Shop and Learn</p>
                <nav>Store</nav>
                <nav>Mac</nav>
                <nav>ipad</nav>
                <nav>iPhone</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>AirTag</nav>
                <nav>Accessories</nav>
                <nav>Gift Cards</nav>
              </div>
              <div className='colum1b'>
                <p>Apple Wallet</p>
                <nav>Wallet</nav>
                <nav>Apple Card</nav>
                <nav>Apple Pay</nav>
                <nav>Apple Cash</nav>
              </div>
            </div>
       

         </div>
      </div>
    </div>
  )
}

export default Heroes
