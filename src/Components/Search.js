import React from 'react'


const Search = (props) => {
  return(
    <div className="search">
      <input type="text" placeholder="search players" value={props.value} onChange={props.changeHandler} />
      <button>Search</button>
    </div>
  )
}



export default Search
