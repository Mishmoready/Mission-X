import React from "react";
import "./BottomSection.css";

export default function BottomSection() {
  return (
    <div className="stPrLiCoBottomSection">
      <button
        className="stPrLiCoButton"
        onClick="backToTop"
        id="stPrLiCoButton"
      >
        {"back To Top".toUpperCase()}
      </button>
    </div>
  );
}
