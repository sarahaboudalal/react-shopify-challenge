import React from 'react'

export default function SingleMovie({ img, title, year, id}){


    return(
        <div key={id}>
        <img src={img} alt="movie poster"/>
        <h4>{title}</h4>
        <p>Release Year: {year}</p>
        </div>
    )
}