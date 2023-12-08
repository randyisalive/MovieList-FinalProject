import { useState } from "react";
import UseLoginData from "../authentication/useLoginData";
import { changePassword } from "./forgot_password_api";

function useForgotData() {
  const { form, setForm, formHandler } = UseLoginData();

  function changePasswordBtn() {
    const username = form.username;
    const password = form.password;
    const retype = form.retype;

    changePassword(username, password, retype).then((data) => {
      console.log(data);
      window.location.href = "/login";
    });
  }

  return { changePasswordBtn, form, formHandler };
}

export default useForgotData;
