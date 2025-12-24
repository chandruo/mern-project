import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import icecream from "../../assets/images/icecream.webp";
import LoginUserInput from "../LoginUserInput/LoginUserInput";
import axios from "axios";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionleft}>
          <img
            src={icecream}
            alt="login-banner"
            className={styles.banner}
          ></img>
        </div>
        <div className={styles.sectionright}>
          <LoginUserInput></LoginUserInput>
        </div>
      </div>
    </>
  );
}
export default Login;
