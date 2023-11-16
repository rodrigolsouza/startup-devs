"use client";
import React from "react";
import { Avatar } from "./Avatar";
import "./cardAboutUs.css";
import { useState } from "react";

export type ListPeopleProps = {
  people: {
    id?: string;
    image: string;
    name: string;
    jobTitle: string;
  }[];
};

export function CardAboutUs({ people }: ListPeopleProps) {
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonClick = () => {
    setActiveButton(!activeButton); 
  };
  return (
    <div className="card-container">
      <h1 className="title-about-us">ABOUT US</h1>
      <div className="list-avatar">
        {people.map((person) => (
          <Avatar key={person.id} people={person} />
        ))}
      </div>

      <button className="button-about-us" onClick={handleButtonClick}>
        A bit about us
      </button>
      <p
        className={
          activeButton ? "text-bit-about-us-active" : "text-bit-about-us"
        }
      >
        We are a web and mobile application development startup. We create
        intelligent digital platforms for you, the entrepreneur, to modernize
        your business and boost your sales by offering innovative experiences
        for your customers. Our team of developers are trained in the most
        current tools on the technology market such as React and Next.ts, in
        addition to the best known tools such as HTML5, SASS and JavaScript.
      </p>
    </div>
  );
}

export default CardAboutUs;
