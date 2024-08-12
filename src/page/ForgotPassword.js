import { FaKey } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../style/Login.css";

const ForgotPassword = () => {
  return (
    <div className="bg">
      <div className="kontenerlogin">
        <h2>Reset Password</h2>
        <label for="inputemail" className="labelemailpwd">
          Email
        </label>
        <br />
        <HiOutlineMail className="iconemailpwd" />
        <input name="inputemail" type="email" placeholder="Enter Email"></input>
        <br />
        <FaKey className="iconemailpwd" />
        <input type="number" placeholder="Enter OTP"></input>
        <button className="butlog butotp" type="submit">
          Request OTP
        </button>
        <br />
        <br />
        <p className="loginsudah">Setelah mengisi OTP maka tekan <i style={{color: "red"}}>Reset</i></p>
        <br />
        <button className="butlog" type="submit">
          <Link to="/login">Reset</Link>
        </button>
      </div>
    </div>
  );
};
export default ForgotPassword;
