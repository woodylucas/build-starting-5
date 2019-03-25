import React from 'react'
import Players from '../Components/Players'

const TeamContainer = (props) => {
  const { teams, handleClick } = props
  const renderTeams = teams.map(playerObj => <Players key={ playerObj.id } handleClick={ handleClick } player={ playerObj } /> )
  return(
    <div className='teams-container'>
      <h1>Your Starting 5</h1>
      { renderTeams }
    </div>
  )
}

export default TeamContainer
