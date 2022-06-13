import { AuthContext } from "../Context/AuthContext";
import React, { useContext, useRef } from "react";
import { FormLabel, Input } from "@chakra-ui/react";

const axios = require("axios").default;

const Login = () => {
  const { login, setLoginCreds, loginCreds, setStatus } =
    useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();

  const handleInput = (e) => {
    let { name, value } = e.target;

    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginCreds.email && loginCreds.password) {
      login();
      e.target[0].value = "";
      e.target[1].value = "";

      axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: {
          ...loginCreds,
        },
      }).then((d) => setStatus(d.data.token));
    } else {
      if (!loginCreds.email) emailRef.current.focus();
      else if (!loginCreds.password) passRef.current.focus();
    }
  };
  return (
    <div>
      <form
        style={{ maxWidth: "300px", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          onChange={handleInput}
          name="email"
          ref={emailRef}
        />
        <FormLabel htmlFor="pass">Password</FormLabel>
        <Input
          id="pass"
          type="text"
          onChange={handleInput}
          name="password"
          ref={passRef}
        />
        <Input
          type="Submit"
          bgGradient="linear(to-r, teal.500, green.500)"
          color="white"
        />
      </form>
    </div>
  );
};

export default Login;