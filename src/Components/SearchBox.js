import React from 'react'

const SearchBox = ({searchBar}) => {
return(
	<div className='pa2'>
	<input onChange={searchBar}
	className='pa3 ba b--green bg-lightest-blue h-25'
	type='search' 
	placeholder='Search Robots' 
	/>
	</div>
	);
}

export default SearchBox
