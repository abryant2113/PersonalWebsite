import React from "react";
import "./App.css";

interface RoundedRectangleProps {
  width: string;
  height: string;
  borderRadius: number;
  backgroundColor: string;
  children?: React.ReactNode;
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  children,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="rounded-pill blurb"
    >
      {children}
    </div>
  );
};

export default RoundedRectangle;
