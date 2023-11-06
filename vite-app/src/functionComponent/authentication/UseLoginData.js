import { useEffect, useState } from "react";
import { loginApi } from "../API";
import {
  LoginHandler,
  generateHashPassword,
} from "../../api/authentication_api";
import Cookies from "js-cookie";
import addTokenDatabase from "./addTokenDatabase";

function UseLoginData() {
  const [form, setForm] = useState({});

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
        }
        console.log(status);
      });
    }
    console.log(form);
  }

  function GeneratePassword() {
    useEffect(() => {
      generateHashPassword("admin").then((data) => {
        console.log(data);
      });
    }, []);
  }

  return { LoginBtnHandler, formHandler, GeneratePassword };
}

export default UseLoginData;
