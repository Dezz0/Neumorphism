import React from "react";
import Configuration from "./SubComponents/Configuration";
import Preview from "./SubComponents/Preview";
import "./styles/Main.css";

export default function Main(prop) {
  return (
    <div className="itd_main row justify-content-center align-items-center gy-5">
      <div className="col-lg-6 col-md-12">
        <Preview
          valColor={prop.valColor}
          size={prop.size}
          radius={prop.radius}
          distance={prop.distance}
          blur={prop.blur}
          shadowColor1={prop.shadowColor1}
          shadowColor2={prop.shadowColor2}
        />
      </div>
      <div className="col-lg-6 col-md-12">
        <Configuration
          valColor={prop.valColor}
          changeColor={prop.changeColor}
          size={prop.size}
          changeSize={prop.changeSize}
          radius={prop.radius}
          changeRadius={prop.changeRadius}
          distance={prop.distance}
          changeDistance={prop.changeDistance}
          blur={prop.blur}
          changeBlur={prop.changeBlur}
          shadowColor1={prop.shadowColor1}
          changeShadowColor1={prop.changeShadowColor1}
          shadowColor2={prop.shadowColor2}
          changeShadowColor2={prop.changeShadowColor2}
        />
      </div>
    </div>
  );
}
