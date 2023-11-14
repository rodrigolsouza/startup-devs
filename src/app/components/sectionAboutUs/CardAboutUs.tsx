import React from 'react';
import {Avatar} from './Avatar';
import "./cardAboutUs.css"


export type ListPeopleProps = {
    people: {
      id?: string;
      image: string;
      name: string;
      jobTitle: string;
    }[];
  };

export function CardAboutUs({people}:ListPeopleProps) {
  return (
    <div className='card-container'>
      <h1>About Us</h1>
      <p>A bit about us</p>
      <div className='list-avatar'>
        {people.map((person)=>(
            <Avatar key={person.id} people={person}/>
        ))}
      </div>
      
    </div>
  );
};

export default CardAboutUs;
