import { useEffect, useRef, useState } from "react";
import {
  LoginHandler,
  generateHashPassword,
} from "../../api/authentication_api";
import Cookies from "js-cookie";
import createUser from "./createUser";
import Login from "../../pages/authentication/Login";

function UseLoginData() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    retype: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emptyRef = useRef(null);
  const successRef = useRef(null);
  const LoginRef = useRef(null);

  const showUsernameToast = () => {
    usernameRef.current.show({
      severity: "error",
      summary: "Error",
      detail: "Username too short (should be above 5 characters)",
    });
  };
  const showEmptyToast = () => {
    emptyRef.current.show({
      severity: "error",
      summary: "Error",
      detail: "Input field cannot be empty",
    });
  };

  const showPasswordToast = () => {
    passwordRef.current.show({
      severity: "error",
      summary: "Error",
      detail: "Password not match",
    });
  };
  const showSuccessToast = () => {
    successRef.current.show({
      severity: "success",
      summary: "Info",
      detail: "User Created Successfully",
    });
  };
  const wrongPassUsernameToast = () => {
    LoginRef.current.show({
      severity: "error",
      summary: "Error",
      detail: "Password or Username not match",
    });
  };

  function formHandler(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function LoginBtnHandler() {
    if (form) {
      LoginHandler(form.username, form.password).then((data) => {
        const status = data.status;
        const token = data.token;
        const user_id = data.user_id;
        if (status === "success") {
          Cookies.set("auth_token", token);
          Cookies.set("user_id", user_id);
          window.location.href = "/";
        } else {
          console.log(status);
          wrongPassUsernameToast();
        }
      });
    }
    console.log(form);
  }

  function CreateUser() {
    console.log(form);

    // if form empty
    if (form.username === "" || form.password === "" || form.retype === "") {
      showEmptyToast();
      return null;
    }

    createUser(form.username, form.password, form.retype, form.email).then(
      (data) => {
        console.log(data);

        // if username less/or than 5 character
        if (data["error"] == "Username too short (min 5 characters)") {
          showUsernameToast();
          return null;
        }

        // if password !== retype
        if (data["error"] == "Password not match") {
          showPasswordToast();
          return null;
        }
        if (data["Message"]) {
          showSuccessToast();
          setStatus(data);
          window.location.href = "/login";
        }
      }
    );
    console.log(status);
  }

  return {
    LoginBtnHandler,
    form,
    setForm,
    formHandler,
    CreateUser,
    status,
    usernameRef,
    passwordRef,
    emptyRef,
    successRef,
    LoginRef,
    wrongPassUsernameToast,
  };
}

export default UseLoginData;
