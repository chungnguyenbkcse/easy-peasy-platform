import { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import Button from "./Button";
import User from "./User";
import LoginImage from "../assets/images/login-image.jpg";
import Password from "./Password";
import Input from "./Input";
import Panel from "./Panel";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName && userPassword) {
      const user = new User(null, userName, userPassword, rememberMe);
      console.log(user);
    } else {
      console.log("Popup shows up");
    }
  };

  const handleUserName = (value) => {
    setUserName(value);
  };
  const handleUserPassword = (value) => {
    setUserPassword(value);
  };
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Panel className="flex justify-center max-w-3xl p-0 m-4">
      <div className="flex flex-col justify-center sm:w-1/2 p-10">
        <h2 className="font-bold text-2xl text-[#EB7F00]">Login</h2>
        <p className="text-sm mt-4 text-[#163A95]">
          A New user?{" "}
          <Link className="text-[#EB7F00]" to="/register">
            Sign Up
          </Link>
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <Input
            name="userName"
            type="text"
            primary
            rounded
            autoComplete="off"
            onChange={handleUserName}
            required
          >
            User Name
          </Input>
          <Password
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            onChange={handleUserPassword}
            primary
            rounded
            autoComplete="off"
            required
          >
            Password
          </Password>
          <div className="mt-6 flex items-center">
            <input
              className="mr-2 appearance-none border-2 rounded-sm border-[#163A95] w-4 h-4 checked:bg-[#7797e9]"
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            <label
              className="text-[#163A95] cursor-pointer select-none"
              htmlFor="rememberMe"
            >
              Remember me
            </label>
          </div>
          <div className="mt-6">
            <a className="text-sm mt-4 text-[#163A95]" href="/">
              Forget Password?
            </a>
          </div>
          <Button primary rounded type="submit">
            <CiLogin />
            Log in
          </Button>
        </form>
      </div>
      <div className="sm:block hidden w-1/2">
        <img src={LoginImage} alt="Decor" />
      </div>
    </Panel>
  );
}

export default LoginForm;
