import { useContext } from 'react';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Input } from '@ui5/webcomponents-react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import { GeneralContext } from '../../context/GeneralContext';
import './style.scss';

export default function SearchBar() {

  const { search, setSearch, setMovieObj, movikiAPI } = useContext(GeneralContext);

  function handleForm(e) {
    setSearch(e.target.value);
  }

  function clearForm() {
    setSearch("");
  }

  async function submitSearch(e) {
    e.preventDefault();
    console.log(search);
    try {
      //const response = movikiAPI.searchMovie(search);
      //setMovieObj(response.data);
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <FlexBox
        className='searchBar'
        alignItems={FlexBoxAlignItems.Center}
        justifyContent={FlexBoxJustifyContent.SpaceBetween} 
    >
      <AiOutlineSearch onClick={submitSearch}/>
      <input 
        placeholder='Type a movie title'
        name='text'
        type='text'
        value={search}
        onChange={handleForm}
      />
      <AiOutlineCloseCircle onClick={clearForm}/>
    </FlexBox>
  );
}
