import { FlexBox, Input } from '@ui5/webcomponents-react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import './style.scss';

export default function SearchBar() {
  return (
    <FlexBox className='searchBar'>
        <AiOutlineSearch />
        <Input />
        <AiOutlineCloseCircle />
    </FlexBox>
  );
}
