import {
  FlexBox,
  Title,
} from '@ui5/webcomponents-react';
import './App.scss';

import icon from '../assets/icon.svg';

function App() {
  return (
    <FlexBox className='container'>
      <FlexBox className='page'>
        <FlexBox className='header'>
          <img src={icon} alt='logo'/>
          <h1>
            Moviki
          </h1>
        </FlexBox>
      </FlexBox>
      <FlexBox className='footer' />
    </FlexBox>
  );
}

export default App;
