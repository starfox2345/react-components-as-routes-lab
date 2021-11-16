import React from 'react';
import { actors, movies } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(({name, movies}) => {
        return(
          <div>
            {name}
            <ul>
              {movies.map(movie=> (
                <li>
                  {movie}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  );
  // return (
  //   <div>
  //     <h1>Actors Page</h1>
  //     {actors.map((actor)=> <div className="actor">{actor.name} {actor.movies}</div>)}
  //   </div>
  // )
};

export default Actors;
