import { useState } from "react";
import { HiOutlineMail, HiOutlineLockOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
    setPasswordType("password");
    }
  };

  return (
    <div className="bg">
      <div className="kontenerlogin">
        <h2>Login</h2>
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
          type={passwordType}
          placeholder="Enter Password"
          value={passwordInput}
          onChange={handlePasswordChange}
        ></input>
        <input
          type="checkbox"
          className="tampilkanpassword"
          name="tamppas"
          onClick={togglePassword}
        ></input>
        <label for="tamppas" className="labeltampilkanpassword">
          Tampilkan Password
        </label>
        <br />
        <br />
        <button className="butlog" type="submit">
          <Link className="buta" to="/">
            Login
          </Link>
        </button>
        <br />
        <br />
        <Link to="/forgotpassword" className="forgotpassword">
          Forgot Password?
        </Link>
        <br />
        <br />
        <button className="butlog" type="submit">
          <Link className="buta" to="/signup">
            Buat Akun Baru
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Login;
