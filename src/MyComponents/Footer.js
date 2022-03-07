import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <footer className="text-center">Copyright &copy; MyTodosList.com</footer>
    </div>
  );
};

export default Footer;
