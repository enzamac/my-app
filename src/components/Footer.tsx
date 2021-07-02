import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className=" footer center mt-1 mb-0 bg-success text-light">
    <div className="inner">
        <p>© Green Mile {date}. </p>
      </div>
    </footer>
  );
};

export default Footer;
