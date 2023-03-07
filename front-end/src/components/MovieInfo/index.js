import { FlexBox } from '@ui5/webcomponents-react';
import { useContext } from 'react';

import { GeneralContext } from '../../context/GeneralContext';

import './style.scss';

export default function MovieInfo() {
  const { movieObj } = useContext(GeneralContext);

  return (
    <FlexBox className='movieInfo'>
    <FlexBox>
        title
        text
        actors
        grade
    </FlexBox>
    <img src={movieObj.Poster} alt='movie poster' /> 
    </FlexBox>
  );
}
