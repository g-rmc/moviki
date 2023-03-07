import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import { useContext } from 'react';

import { GeneralContext } from '../../context/GeneralContext';

import './style.scss';

export default function MovieInfo() {
  const { movieObj } = useContext(GeneralContext);

  return (
    <FlexBox className='movieInfo'>
        <FlexBox className='movieTexts' direction={FlexBoxDirection.Column}>
            <h1>{movieObj.Title}</h1>
            <p>{movieObj.Plot}</p>
            <h2>Actors</h2>
            <p>{movieObj.Actors}</p>
            <h2>Review</h2>
            <p>IMDb: <b>{movieObj.imdbRating}</b></p>
        </FlexBox>
        <img src={movieObj.Poster} alt='movie poster' onError={({ currentTarget }) => {
            currentTarget.onerror = null; 
            currentTarget.src=`https://sd.keepcalms.com/i/keep-calm-poster-not-found.png`;
            }}
        /> 
    </FlexBox>
  );
}
