import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UseAuth } from "./context/AuthContext";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <UseAuth>
        <App />
      </UseAuth>
    </ChakraProvider>
  </React.StrictMode>
);
