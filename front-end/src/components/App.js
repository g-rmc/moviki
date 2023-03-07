import { FlexBox, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxAlignItems } from '@ui5/webcomponents-react';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import './App.scss';
import icon from '../assets/icon.svg';

import SearchBar from './SearchBar';
import MovieInfo from './MovieInfo';

import { GeneralContext } from '../context/GeneralContext';

export default function App() {
  const { loading, movieObj } = useContext(GeneralContext);

  return (
    <FlexBox className='container'>
      <FlexBox className='page'>
        <FlexBox
          className='header'
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
        >
          <img src={icon} alt='logo'/>
          <h1> Moviki </h1>
        </FlexBox>
        <FlexBox 
          style={{width: '100%'}}
          direction={FlexBoxDirection.Column}
        >
          <SearchBar />
          {movieObj.Response === 'True'?
            <MovieInfo />
            :
            <FlexBox
              className='warning'
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.Center}
            >
              {loading?
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
                :
                <>{movieObj.Error}</>
              }
            </FlexBox>
          }
        </FlexBox>
      </FlexBox>
      <FlexBox className='footer' />
    </FlexBox>
  );
}
