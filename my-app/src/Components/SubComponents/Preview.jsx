import React from "react";

export default function Preview(prop) {
  let size = Number(prop.size);
  let radius = Number(prop.radius);
  let distance = Number(prop.distance);
  let blur = Number(prop.blur);
  return (
    <div
      style={{
        backgroundColor: prop.valColor,
        width: size,
        height: size,
        borderRadius: radius,
        boxShadow: `-${distance}px -${distance}px ${blur}px ${prop.shadowColor1}, ${distance}px ${distance}px ${blur}px ${prop.shadowColor2}`
      }}
      className="soft-element"
    ></div>
  );
}
