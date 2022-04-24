import React from "react";

let windowInnerWidth = document.documentElement.clientWidth;
console.log(windowInnerWidth);
let maxSizeRange = windowInnerWidth <= 575 ? 180 : windowInnerWidth <= 768 ? 250 : 410;

export default function Configuration({
  valColor,
  size,
  radius,
  distance,
  blur,
  changeColor,
  changeSize,
  changeRadius,
  changeBlur,
  changeDistance,
  shadowColor1,
  shadowColor2,
  changeShadowColor1,
  changeShadowColor2
}) {
  return (
    <div className="config_block">
      <div className="color">
        <label htmlFor="exampleColorInput" className="form-label">
          Pick a color:
        </label>
        <input
          type="color"
          className="itd_color_ form-control form-control-color"
          id="exampleColorInput"
          value={valColor}
          title="Choose your color"
          onChange={changeColor}
        />
        <span>or</span>
        <input type="text" value={valColor} readOnly />
      </div>
      <div className="Size">
        <label htmlFor="SizeRange" className="form-range">
          Size:
        </label>
        <input
          type="range"
          value={size}
          min="70"
          max={maxSizeRange}
          className="form-range"
          id="SizeRange"
          onChange={changeSize}
        />
      </div>
      <div className="Radius">
        <label htmlFor="RadiusRange" className="form-range">
          Radius:
        </label>
        <input
          type="range"
          value={radius}
          min="0"
          max={size * 0.5}
          className="form-range"
          id="RadiusRange"
          onChange={changeRadius}
        />
      </div>
      <div className="Distance">
        <label htmlFor="DistanceRange" className="form-range">
          Distance:
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={distance}
          className="form-range"
          id="DistanceRange"
          onChange={changeDistance}
        />
      </div>
      <div className="Blur">
        <label htmlFor="BlurRange" className="form-range">
          Blur:
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          className="form-range"
          id="BlurRange"
          onChange={changeBlur}
        />
      </div>
      <div className="Select-boxShadow">
        <div className="shadow1">
          <label htmlFor="ColorInput1" className="form-label">
            Change color upper shadow:
          </label>
          <input
            type="color"
            className="itd_color_ form-control form-control-color"
            id="ColorInput1"
            value={shadowColor1}
            title="Choose your color"
            onChange={changeShadowColor1}
          />
        </div>
        <div className="shadow2">
          <label htmlFor="ColorInput2" className="form-label">
            Change color lower shadow:
          </label>
          <input
            type="color"
            className="itd_color_ form-control form-control-color"
            id="ColorInput2"
            value={shadowColor2}
            title="Choose your color"
            onChange={changeShadowColor2}
          />
        </div>
      </div>
      <div className="code-block">
        <p>
          <span>border-radius</span>: {radius}px;
        </p>
        <p>
          <span>background</span>: {valColor};
        </p>
        <p>
          <span>box-shadow</span>: {distance}px {distance}px {blur}px {shadowColor1},
        </p>
        <p>
          -{distance}px -{distance}px {blur}px {shadowColor2};
        </p>
      </div>
    </div>
  );
}
