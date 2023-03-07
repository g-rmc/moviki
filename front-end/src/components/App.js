import { FlexBox, FlexBoxDirection, Text } from '@ui5/webcomponents-react';
import { useContext, useEffect } from 'react';

import './App.scss';
import icon from '../assets/icon.svg';

import SearchBar from './SearchBar';
import MovieInfo from './MovieInfo';

import { GeneralContext } from '../context/GeneralContext';
import movieExample from '../services/movieExample.json';

export default function App() {
  const { movieObj, setMovieObj } = useContext(GeneralContext);

  useEffect(() => {
    setMovieObj(movieExample)
  }, [setMovieObj]);

  return (
    <FlexBox className='container'>
      <FlexBox className='page'>
        <FlexBox className='header'>
          <img src={icon} alt='logo'/>
          <h1> Moviki </h1>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <SearchBar />
          {movieObj.Response === 'True'?
            <MovieInfo />
            :
            <Text
              className='warning'
            >
              {movieObj.Error}
            </Text>
          }
        </FlexBox>
      </FlexBox>
      <FlexBox className='footer' />
    </FlexBox>
  );
}
