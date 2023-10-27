import { createContext, useState } from "react";
import App from "./App";

export const UserContext = createContext();

export function Context() {
  const [link, setLink] = useState("Home");

  return (
    <UserContext.Provider value={{ link, setLink }}>
      <App />
    </UserContext.Provider>
  );
}
