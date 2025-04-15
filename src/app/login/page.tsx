"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.success) {
      router.push("/");
    }
  };
  return (
    <div className={styles.form} style={{ backgroundColor: "white" }}>
      <h1>login</h1>
      <p>login page</p>
      <div>
        <div>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
