import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { sportsHubTheme } from "./styles/theme";
import {BrowserRouter} from 'react-router-dom'
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react'


// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={sportsHubTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
