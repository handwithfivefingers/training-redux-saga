import React, { useState, useEffect, useRef } from 'react';
import CardItem from './CardItem';
import listmovies from './../../../../../../reducers/movies';
import { LoadMovies } from './../../../../../../actions/movies';

const initialState = { list: [] };
function reducer(state, action) {
  switch (action.type) {
    case 'Load':
      return { list: props };
    default:
      throw new Error();
  }
}
const MovieSelection = ({ list }) => {
  let initialState = { list };
  // state
  const [Listmovie, dispatch] = React.useReducer(reducer, initialState);
  console.log(initialState);
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: 'Load' })}>
        Load
      </button>
      {list.map((movie) => {
        return <CardItem movie={movie} key={movie.id} />;
      })}
    </>
  );
};

export default MovieSelection;
