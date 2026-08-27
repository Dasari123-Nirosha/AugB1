import React from 'react'

export default function UserData({Name,Age,City,Mobile,Email,Occupation,Address}) {
  return (
    <div className="box">
        <h1>{Name}</h1>
        <p>Age:{Age}</p>
        <p>City:{City}</p>
        <p>Mobile:{Mobile}</p>
        <p>Email:{Email}</p>
        <p>Occupation:{Occupation}</p>
        <p>Address:{Address}</p>
        
    </div>
  );
}
