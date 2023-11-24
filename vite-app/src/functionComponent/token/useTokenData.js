import { useEffect, useState } from "react";
import { getAllTokenById } from "./token_services";
import { userIdCookie } from "../../Cookies";
import { authTokenCookie } from "../../Cookies";

function useTokenData() {
  const [tokens, setTokens] = useState([]);

  function checkIsValid() {
    const token = authTokenCookie;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].token === token) {
        return true;
      }
    }

    return false;
  }
  function GetTokensById() {
    const user_id = userIdCookie;
    useEffect(() => {
      getAllTokenById().then((data) => {
        setTokens(data);
      });
    }, [user_id]);

    return { tokens, setTokens };
  }

  return { GetTokensById, checkIsValid };
}

export default useTokenData;
