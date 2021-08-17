import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const { searchValue, setSearchValue  } = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const searchCocktail = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <section className='search section'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your cocktail</label>
          <input 
            type='text' 
            id='name'  
            value={searchValue} 
            onChange={searchCocktail} 
          />
        </div>
      </form>
      
    </section>
  )
}

export default SearchForm
