import React from "react";
import Header from "./NavBar/Header";
import Footer from "./NavBar/Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
