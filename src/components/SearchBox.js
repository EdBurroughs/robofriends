import React from 'react'

function SearchBox({searchField, searchChange} ) {
  return (
    <div>
        <input 
            className='pa3 ma1 ba b--green bg-lightest-blue'
            type = 'search'
            placeholder='search robots'
            onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox