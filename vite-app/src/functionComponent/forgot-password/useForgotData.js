import { useRef, useState } from "react";
import UseLoginData from "../authentication/useLoginData";
import { changePassword } from "./forgot_password_api";

function useForgotData() {
  const { form, setForm, formHandler } = UseLoginData();

  const refConfirmToast = useRef(null);
  const show = async (ref, status) => {
    if (status === "No username avaliable") {
      ref.current.show({
        severity: "error",
        summary: "Info",
        detail: status,
      });
    } else if (status === "password not same in retype") {
      ref.current.show({
        severity: "error",
        summary: "Info",
        detail: status,
      });
    } else {
      ref.current.show({
        severity: "success",
        summary: "Info",
        detail: "Password change",
      });
    }
  };

  function changePasswordBtn() {
    const username = form.username;
    const password = form.password;
    const retype = form.retype;

    changePassword(username, password, retype).then((data) => {
      console.log(data);
      if (data) {
        if (data.status === "No username avaliable") {
          show(refConfirmToast, data.status);
        } else if (data.status === "password not same in retype") {
          show(refConfirmToast, data.status);
        } else {
          show(refConfirmToast, data.status).then(() => {
            window.location.href = "/login";
          });
        }
      }
      /*       window.location.href = "/login";
       */
    });
  }

  return { changePasswordBtn, form, formHandler, refConfirmToast, show };
}

export default useForgotData;
