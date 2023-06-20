import React, { useState } from "react";
import "./SideFilter.css";
// Created an array within the function to maintain multiple objects being turned into checkboxes//
export default function StPrLiCoSideFilter() {
  const [tickBoxes, tickBoxset] = useState([
    { name: "Free", isChecked: false },
    { name: "Premium", isChecked: false },
    { name: "Animation", isChecked: false },
    { name: "Game", isChecked: false },
    { name: "ChatBot", isChecked: false },
    { name: "Augmented Reality", isChecked: false },
    { name: "Computer Science", isChecked: false },
    { name: "Maths", isChecked: false },
    { name: "Science", isChecked: false },
    { name: "Language", isChecked: false },
    { name: "Art", isChecked: false },
    { name: "Music", isChecked: false },
    { name: "1-4", isChecked: false },
    { name: "5-6", isChecked: false },
    { name: "7-8", isChecked: false },
    { name: "9-13", isChecked: false },
  ]);

  //Create a function where it was possible to toggle the array's with checkboxes//
  const handleCheckboxChange = (index) => {
    const switchTickBox = [...tickBoxes]; // Create a copy of the checkboxes array
    switchTickBox[index].isChecked = !switchTickBox[index].isChecked; // Toggle the isChecked property
    tickBoxset(switchTickBox); // Update the state with the new checkbox values
  };
  //Within the array checkboxes having certain array's to apply spacing for applying <p> tags in between//
  const statement1 = [1];
  const statement2 = [5];
  const statement3 = [11];

  return (
    <div className="StPrLiCoSideFilter">
      <p className="SideFilterP">Subscription</p>
      {tickBoxes.map((checkbox, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={checkbox.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            {checkbox.name}
          </label>
          {statement1.includes(index) && (
            <p className="SideFilterP">Activity Type</p>
          )}
          {statement2.includes(index) && (
            <p className="SideFilterP">Subject Matter</p>
          )}
          {statement3.includes(index) && (
            <p className="SideFilterP">Year Level</p>
          )}
        </div>
      ))}
    </div>
  );
}
