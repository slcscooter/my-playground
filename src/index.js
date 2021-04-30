import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import StoreFront from "./StoreFront";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function Logout() {
    return (
      <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
        Logout
      </button>
    );
  }

  function PromptLogin() {
    return <h2>Please login</h2>;
  }

  function Login() {
    return (
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    );
  }

  if (loggedIn) {
    return (
      <>
        <StoreFront />
        <Logout />
      </>
    );
  } else if (!loggedIn) {
    return (
      <>
        <PromptLogin />
        <Login />
      </>
    );
  }
}

render(<App />, document.querySelector("#react-root"));
