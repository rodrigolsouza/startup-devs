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
      <img className='image-avatar' src={people.image} alt={people.name} />
      <h2 className='people-name' >{people.name}</h2>
      <p className='people-job'>{people.jobTitle}</p>
    </div>
  );
};

export default Avatar;

