import { React, useEffect } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Router from "../src/components/Router";
function App() {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Users")) == undefined) {
      localStorage.setItem(
        "Users",
        JSON.stringify([
          {
            email: "yagmur@gmail.com",
            password: "1234",
            admin: "yes",
          },
        ])
      );
    }
  }, []);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
    </div>
  );
}

export default App;
