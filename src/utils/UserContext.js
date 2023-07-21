import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Anant Singhal",
    email: "anant19@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
