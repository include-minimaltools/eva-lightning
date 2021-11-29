import { Navigate } from "react-router-dom";

export const UserData = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      Navigate("/login");
      return null;
    }

    return user;
  } catch {
    Navigate("/login");
    return null;
  }
}
