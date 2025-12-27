import { useEffect, useState } from "react";
import styles from "./LoginUserInput.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function LoginUserInput() {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log("API_URL", API_URL);

  const [isLoginTab, setLoginTab] = useState(true);
  let formName = `${isLoginTab ? "Login" : "SignUp"}  form`;
  let isloginActive = isLoginTab;
  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
    } catch (e) {}
  }
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        return;
      }
      const data = await response.json();
      console.log(data);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <h1>{formName}</h1>
        <div className={styles.tabContainer}>
          <button
            className={isloginActive ? styles.active : ""}
            onClick={() => {
              setLoginTab(true);
            }}
          
          >
            Login
          </button>
          <button
            className={!isloginActive ? styles.active : ""}
            onClick={() => {
              setLoginTab(false);
            }}
          >
            Sign Up
          </button>
        </div>
        {isLoginTab ? (
          <div className={styles.formcontainer} >
            <form onSubmit={handleLogin}>
              <div className={styles.inputfields}>
               <div className={styles.inputfield}>
                <label name="email">email</label>
                <input
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.inputfield}>
                <label name="password">password</label>
                <input
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleChange}
                ></input>
              </div>
              </div>
              <button type="submit" className={styles.action}>Login</button>
            </form>
          </div>
        ) : (
          <div className={styles.formcontainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputfields}>
              <div className={styles.inputfield}>
                <label name="username">username</label>
                <input
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.inputfield}>
                <label name="email">email</label>
                <input
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className={styles.inputfield}>
                <label name="password">password</label>
                <input
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleChange}
                ></input>
              </div>
              </div>
              <button type="submit" className={styles.action}>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
