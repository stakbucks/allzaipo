import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled from "styled-components";
import GlobalStyles from "./styles/GloalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <GlobalStyles />
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
