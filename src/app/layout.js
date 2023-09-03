import React from "react";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import "../app/global.css";
import Providers from "./Providers";
import List from "../components/List";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <Header />
          <List/>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
