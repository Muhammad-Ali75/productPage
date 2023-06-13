import personSVG from "../../assets/person-outline.svg";
import "./styles/Button.css";

function AuthButton() {
  return (
    <div className="container">
      <button className="btn reg">Register</button>
      <button className="btn sign">
        <img src={personSVG} alt="person-outline" />
        <p style={{ width: 50 }}>Sign In</p>
      </button>
    </div>
  );
}

export default AuthButton;
