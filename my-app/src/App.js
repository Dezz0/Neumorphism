import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App() {
  const [valColor, setValColor] = useState("#000000");
  const [size, setSize] = useState(120);
  const [radius, setRadius] = useState(10);
  const [distance, setDistanse] = useState(10);
  const [blur, setBlur] = useState(10);
  const [shadowColor1, setShadowColor1] = useState("#ffffff");
  const [shadowColor2, setShadowColor2] = useState("#b5b5b5");

  function changeColor(evt) {
    setValColor(evt.target.value);
  }
  function changeSize(evt) {
    setSize(evt.target.value);
  }
  function changeRadius(evt) {
    setRadius(evt.target.value);
  }
  function changeBlur(evt) {
    setBlur(evt.target.value);
  }
  function changeDistance(evt) {
    setDistanse(evt.target.value);
  }
  function changeShadowColor1(evt) {
    setShadowColor1(evt.target.value);
  }
  function changeShadowColor2(evt) {
    setShadowColor2(evt.target.value);
  }

  return (
    <div className="container">
      <Header />
      <Main
        valColor={valColor}
        changeColor={changeColor}
        size={size}
        changeSize={changeSize}
        radius={radius}
        changeRadius={changeRadius}
        distance={distance}
        changeDistance={changeDistance}
        blur={blur}
        changeBlur={changeBlur}
        shadowColor1={shadowColor1}
        changeShadowColor1={changeShadowColor1}
        shadowColor2={shadowColor2}
        changeShadowColor2={changeShadowColor2}
      />
      <Footer />
    </div>
  );
}
