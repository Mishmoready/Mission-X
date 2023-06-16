import React, { useState } from "react";
import "./SideFilter.css";

function StPrLiCoSideFilter() {
  const [checkboxes, setCheckboxes] = useState([
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

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes]; // Create a copy of the checkboxes array
    updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked; // Toggle the isChecked property
    setCheckboxes(updatedCheckboxes); // Update the state with the new checkbox values
  };

  const statement1 = [1];
  const statement2 = [5];
  const statement3 = [11];

  return (
    <div className="StPrLiCoSideFilter">
      <p className="SideFilterP">Subscription</p>
      {checkboxes.map((checkbox, index) => (
        <React.Fragment key={index}>
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
        </React.Fragment>
      ))}
    </div>
  );
}

export default StPrLiCoSideFilter;
