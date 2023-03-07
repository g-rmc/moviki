import { useContext } from 'react';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent } from '@ui5/webcomponents-react';
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

  async function submitSearch() {
    try {
      const response = await movikiAPI.searchMovie(search);
      console.log(response)
      setMovieObj(response.data);
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
        onKeyDown={(e) => {
          if(e.key === 'Enter') submitSearch()
          if(e.key === 'Escape') clearForm()
        }}
      />
      <AiOutlineCloseCircle onClick={clearForm}/>
    </FlexBox>
  );
}
