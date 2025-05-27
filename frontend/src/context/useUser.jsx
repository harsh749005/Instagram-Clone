// /src/context/useUser.js
import { useContext } from "react";
import { UserContext } from "./userContext";

const useUser = () => useContext(UserContext);

export default useUser;
