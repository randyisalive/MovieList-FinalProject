import { useEffect, useState } from "react";
import {
  LoginHandler,
  generateHashPassword,
} from "../../api/authentication_api";
import Cookies from "js-cookie";
import getAllUser from "../users/getAllUser";
import createUser from "./createUser";

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

  function CreateUser() {
    console.log(form);
    createUser(form.username, form.password, form.retype).then((data) => {
      console.log(data);
      window.location.href = "/login";
    });
  }

  return { LoginBtnHandler, formHandler, GeneratePassword, CreateUser };
}

export default UseLoginData;
