import { useContext } from 'react';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent } from '@ui5/webcomponents-react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import { GeneralContext } from '../../context/GeneralContext';
import './style.scss';

export default function SearchBar() {

  const { search, setSearch, setMovieObj, resetMovieObj, loading, setLoading, movikiAPI } = useContext(GeneralContext);

  function handleForm(e) {
    setSearch(e.target.value);
  }

  function clearForm() {
    setSearch("");
    resetMovieObj();
  }

  async function submitSearch() {
    resetMovieObj();
    setLoading(true);
    try {
      const response = await movikiAPI.searchMovie(search);
      setMovieObj(response.data);
    } catch (err) {
      console.error(err.message)
    }
    setLoading(false);
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
        disabled={loading}
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
