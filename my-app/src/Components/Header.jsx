import React from "react";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="itd_header row justify-content-center align-items-center">
      <div className="col-12">
        <h1 className="text-center">Neumorphism.io</h1>
      </div>
      <div className="col-12">
        <p className="itd_header_text text-center">
          Generate <span className="fw-bold">Soft</span>-UI CSS code
        </p>
      </div>
    </div>
  );
}
