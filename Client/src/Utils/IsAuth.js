import Cookies from "js-cookie";

export const isAuth = () => {
  const token = Cookies.get("token");

  if (token) {
    return true;
  }
  return false;
};
