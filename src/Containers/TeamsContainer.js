import React from 'react'
import Players from '../Components/Players'
import { Grid } from 'semantic-ui-react'

const TeamContainer = (props) => {
  const { teams, handleClick } = props
  const renderTeams = teams.map(playerObj => <Players key={ playerObj.id } handleClick={ handleClick } player={ playerObj } /> )
  return(
    <Grid.Row>
      <h1>Your Starting 5</h1>
      { renderTeams }
    </Grid.Row>
  )
}

export default TeamContainer
