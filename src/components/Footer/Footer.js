import "./styles/Footer.css";
import logo from "../../assets/logo.png";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/master-card.png";
import ach from "../../assets/ach.png";
import americanExpress from "../../assets/american-express.png";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer">
      {/* <div> */}
      <div class="footer-content">
        {/* Section-1 */}
        <div class="footer-container">
          <img src={logo} alt="logo" className="logo-img" />
          <p>
            Connecting buyers and manufacturers using the world’s best
            sourcing experts & technology built by buyers, for buyers.
          </p>
          <h3>Sign Up to Our Newsletter</h3>
          <label>
            Email
            <a style={{ color: "red" }} href="#">*</a>
          </label>
          <input />
          <button type="submit">Submit</button>
          <div className="social-links">
            <h3>Follow Us:</h3>
            <div className="circle">
              <RiLinkedinFill />
            </div>
            <div className="circle">
              <RiFacebookFill />
            </div>

          </div>
          <div className="circle">
            <RiFacebookFill />
          </div>
        </div>
      </div>
      {/* Section-1 */}
      {/* Section-2 */}
      <div class="footer-links">
        <h3>About Us</h3>
        <ul>
          <li>Our Story</li>
          <li>How to Buy</li>
          <li>Our Partners</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="payment-options">
          <h3>We accept</h3>
          <div className="payment-images">
            <img src={visa} alt="visa" />
            <img src={masterCard} alt="masterCard" />
            <img src={americanExpress} alt="americanExpress" />
            <div className="ach">
              <img src={ach} alt="ach" />
            </div>
          </div>
        </div>
      </div>
      {/* Section-2 */}
      {/* Section-3 */}
      <div class="footer-links">
        <h3>Our Services </h3>
        <ul>
          <li>Expert Sourcing</li>
          <li>Contract Manufacturing</li>
          <li>Buy</li>
          <li>Financing</li>
        </ul>
      </div>
      {/* Section-3 */}
      {/* Section-4 */}
      <div class="footer-links">
        <h3>Account</h3>
        <ul>
          <li>Sign In</li>
          <li>Register to Buy</li>
          <li>My Profile</li>
          <li>My Orders</li>
          <li>Register to Sell</li>
          <li>Become a Sourcing Expert</li>
        </ul>
      </div>
      {/* Section-4 */}
      {/* Section-5 */}
      <div class="footer-locations">
        <h3>Our Locations</h3>
        <p>BuyHive Limited</p>
        <p>
          Dragon Industrial Bldg. Unit 8B, 93 King Lam St. Cheung Sha Wan,
          Kowloon, Hong Kong
        </p>
        <p className="usa">BuyHive USA Inc.</p>
        <p>4730 South Fort Apache Rd. Suite 300 Las Vegas, NV 89147 USA</p>
      </div>
    </div>
      {/* Section-6 */ }
  {/* <div class="footer-bottom">
        <p>&copy; 2023 BuyHive Limited All Rights Reserved</p>
        <div className="termContainer">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div> */}
  {/* Section-6 */ }
  {/* </div> */ }
    </footer >
  );
}

export default Footer;
