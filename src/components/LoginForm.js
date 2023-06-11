import { useState } from "react";
import User from "./User";
import LoginImage from "../assets/images/login-image.jpg";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName && userPassword) {
      const user = new User(userName, userPassword, rememberMe);
      console.log(user);
    } else {
      console.log("Popup shows up");
    }
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleUserPassword = (event) => {
    setUserPassword(event.target.value);
  };
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
      {/* Form */}
      <div className="sm:w-1/2 px-16">
        <h2 className="font-bold text-2xl text-[#EB7F00]">Login</h2>
        <p className="text-sm mt-4 text-[#163A95]">A New user? Sign Up</p>
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <div className="mt-6 relative">
            <input
              className=" p-2 rounded-xl border w-full focus:outline-none focus:border-[#EB7F00] transition-colors peer"
              required
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={handleUserName}
              autoComplete="off"
            />
            <label
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#163A95] cursor-text peer-focus:text-xs peer-focus:-top-3 peer-focus:left-0 peer-focus:text-[#EB7F00] transition-all duration-500"
              htmlFor="userName"
            >
              User Name
            </label>
          </div>
          <div className="mt-6 relative">
            <input
              className=" p-2 rounded-xl border w-full focus:outline-none focus:border-[#EB7F00] transition-colors peer"
              required
              type="password"
              name="userPassword"
              id="userPassword"
              value={userPassword}
              onChange={handleUserPassword}
            />
            <label
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#163A95] cursor-text peer-focus:text-xs peer-focus:-top-3 peer-focus:left-0 peer-focus:text-[#EB7F00] transition-all duration-500"
              htmlFor="userPassword"
            >
              Password
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#163A95"
              className="bi bi-eye-fill absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </div>
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
              className="text-[#163A95] cursor-pointer"
              htmlFor="rememberMe"
            >
              Remember me
            </label>
          </div>
          <div className="mt-6"></div>
          <a className="text-sm mt-4 text-[#163A95]" href="#">
            Forget Password?
          </a>
          <button
            className="bg-[#163A95] rounded-xl text-[#EB7F00] py-2 hover:bg-[#EB7F00] hover:text-[#163A95] transition-colors"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
      {/* Image */}
      <div className="sm:block hidden w-1/2">
        <img className="rounded-2xl" src={LoginImage} alt="Decor" />
      </div>
    </div>
  );
}

export default LoginForm;
