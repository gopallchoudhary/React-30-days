import React, { useState } from "react";
import "./App.css";

function Twelve() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(isRegistered);
  return (
    <>
      <div className="flex items-center justify-center">
        <form className="text-3xl">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-black p-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-black ml-5 p-2 rounded-lg"
          />
        </form>
        <button
          onClick={() => setIsRegistered(!isRegistered)}
          className="bg-blue-500 p-4 w-1/6 rounded-lg cursor-pointer text-white hover:shadow-2xl ml-3"
        >
          {isRegistered ? "Login" : "Sign Up"}
        </button>
      </div>
      <p className="p-2 text-2xl font-semibold text-white">
        {isRegistered ? (
          <p>
            <span className="text-blue-700">Login</span>, you already have an
            account
          </p>
        ) : (
          "You dont have an account, please register..."
        )}
      </p>
    </>
  );
}

export default Twelve;
