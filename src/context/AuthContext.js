import React, { createContext, useState } from "react";

import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const AuthContext = createContext();

export const UseAuth = (props) => {
  const toast = useToast();
  const id = "toast";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();
  const loginHandler = async (mobile, password) => {
    setIsLoading(true);
    axios
      .post("http://localhost:5000/StuSign", {
        mobile: mobile,
        password: password,
      })
      .then((result) => {
        console.log("login result -->", result.data);
        window.location.href = "/dashboard";
        Cookies.set("jwt", result.data.token);
        Cookies.set("name", result.data.user.name);
        Cookies.set("CurrentUser", JSON.stringify(result.data));
        Cookies.set("isLoggedIn", true);
        setIsLoading(false);
        setIsLoggedIn(true);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "success",
            description: "амжилттай нэвтэрлээ!",
          });
        }
      })
      .catch((result) => {
        console.log("login err -->", result.data);
        setIsLoading(false);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "error",
            description: "Таны нэвтрэх нэр эсвэл нууц үг буруу байна!",
          });
        }
      });
  };

  const logoutHandler = async () => {
    window.location.href = "/login";
    // history.push("/login");
    setIsLoggedIn(false);
    Cookies.remove("jwt");
    Cookies.remove("isLoggedIn");
    Cookies.remove("CurrentUser");
    Cookies.remove("name");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        loginHandler,
        isLoggedIn,
        logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
