/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "./avatar.css"

export type PersonProps = {
  people: {
    id?: string;
    image: string;
    name: string;
    jobTitle: string;
  };
};

export function Avatar({people}: PersonProps) {
  return (
    <div className='box-avatar'>
      <img src={people.image} alt={people.name} />
      <h2>{people.name}</h2>
      <p>{people.jobTitle}</p>
    </div>
  );
};

export default Avatar;

