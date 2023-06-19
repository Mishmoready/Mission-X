import React, { useState } from "react";
import Project01 from "./images/Project01.png";
import Project02 from "./images/Project02.png";
import Project03 from "./images/Project03.png";
import Project04 from "./images/Project04.png";
import Project05 from "./images/Project05.png";
import Project06 from "./images/Project06.png";
import Project07 from "./images/Project07.png";
import Project08 from "./images/Project08.png";
import Project09 from "./images/Project09.png";
import Project10 from "./images/Project10.png";
import Project11 from "./images/Project11.png";
import Project12 from "./images/Project12.png";
import Project13 from "./images/Project13.png";
import Project14 from "./images/Project14.png";
import Project15 from "./images/Project15.png";

export default function ContentTable() {
  const stPrLiCoSquareContainer = [
    {
      id: 1,
      image: "Project01",
      title: "Introduction",
      difficulty: "Beginner",
      subscription: "Free",
      subjectMatter: "Computer Science",
      yearLevel: "1-4",
    },
    {
      id: 2,
      image: "Project02.png",
      title: "My Birthday",
      difficulty: "Beginner",
      subscription: "Free",
      subjectMatter: "Maths",
      yearLevel: "1-4",
    },
    {
      id: 3,
      image: "Project03.png",
      title: "10 Block Challenge",
      difficulty: "Beginner",
      subscription: "Premium",
      subjectMatter: "Language",
      yearLevel: "1-4",
    },
    {
      id: 4,
      image: "Project04.png",
      title: "Build a band",
      difficulty: "Beginner",
      subscription: "Free",
      subjectMatter: "Language",
      yearLevel: "1-4",
    },
    {
      id: 5,
      image: "Project05.png",
      title: "The Bear and the Monkey",
      difficulty: "Beginner",
      subscription: "Premium",
      subjectMatter: "Maths",
      yearLevel: "1-4",
    },
    {
      id: 6,
      image: "Project06.png",
      title: "Debugging",
      difficulty: "Intermediate",
      subscription: "Free",
      subjectMatter: "Computer Science",
      yearLevel: "5-6",
    },
    {
      id: 7,
      image: "Project07.png",
      title: "About me",
      difficulty: "Intermediate",
      subscription: "Premium",
      subjectMatter: "Art",
      yearLevel: "5-6",
    },
    {
      id: 8,
      image: "Project08.png",
      title: "I am here!",
      difficulty: "Intermediate",
      subscription: "Free",
      subjectMatter: "Maths",
      yearLevel: "5-6",
    },
    {
      id: 9,
      image: "Project09.png",
      title: "Funny Faces",
      difficulty: "Intermediate",
      subscription: "Premium",
      subjectMatter: "Computer Science",
      yearLevel: "5-6",
    },
    {
      id: 10,
      image: "Project10.png",
      title: "It Tickles",
      difficulty: "Intermediate",
      subscription: "Free",
      subjectMatter: "Computer Science",
      yearLevel: "7-8",
    },
    {
      id: 11,
      image: "Project11.png",
      title: "Penguin in a Desert",
      difficulty: "Intermediate",
      subscription: "Free",
      subjectMatter: "Computer Science",
      yearLevel: "7-8",
    },
    {
      id: 12,
      image: "Project12.png",
      title: "Time Travel",
      difficulty: "Advanced",
      subscription: "Premium",
      subjectMatter: "Language",
      yearLevel: "7-8",
    },
    {
      id: 13,
      image: "Project13.png",
      title: "Birthday Card",
      difficulty: "Advanced",
      subscription: "Premium",
      subjectMatter: "Language",
      yearLevel: "9-13",
    },
    {
      id: 14,
      image: "Project14.png",
      title: "The Lion and the Mouse",
      difficulty: "Advanced",
      subscription: "Premium",
      subjectMatter: "Music",
      yearLevel: "9-13",
    },
    {
      id: 15,
      image: "Project15.png",
      title: "The Lion and the Mouse Part 2",
      difficulty: "Advanced",
      subscription: "Premium",
      subjectMatter: "Computer Science",
      yearLevel: "9-13",
    },
  ];

  // using a for loop to create a 3x5 table. //
  const rows = [];
  for (let i = 0; i < stPrLiCoSquareContainer.length; i += 3) {
    rows.push(stPrLiCoSquareContainer.slice(i, i + 3));
  }

  return (
    <div className="grid-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((item) => (
            <div key={item.id} className="grid-item">
              <img
                src={item.image}
                alt={`img ${item.id}`}
                className="grid-image"
              />
              <div className="grid-title">{item.title}</div>
              <div className="grid-subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
