import { HiOutlineLockOpen, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../style/Login.css";

const SignUp = () => {
  return (
    <div className="bg">
      <div className="kontenerlogin">
        <h2>Create Account</h2>
        <label for="inputemail" className="labelemailpwd">
          Email
        </label>
        <br />
        <HiOutlineMail className="iconemailpwd" />
        <input name="inputemail" type="email" placeholder="Enter Email"></input>
        <label for="inputpwd" className="labelemailpwd">
          Password
        </label>
        <br />
        <HiOutlineLockOpen className="iconemailpwd" />
        <input
          name="inputpwd"
          type="password"
          placeholder="Enter Password"
        ></input>
        <label for="inputpwd" className="labelemailpwd">
          Confirm Password
        </label>
        <br />
        <HiOutlineLockOpen className="iconemailpwd" />
        <input
          name="inputpwd"
          type="password"
          placeholder="Confirm Password"
        ></input>

        <br />
        <br />
        <button className="butlog" type="submit">
          <Link to ="/login">Create Account</Link>
        </button>
        <br />
        <br />
        <p className="loginsudah">Sudah punya akun?</p>
        <button className="butlog" type="submit">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
export default SignUp;
