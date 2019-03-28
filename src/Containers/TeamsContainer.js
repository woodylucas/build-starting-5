import React from 'react'
import Players from '../Components/Players'
import { Grid } from 'semantic-ui-react'

const TeamContainer = (props) => {
  const { teams, handleClick } = props
  const renderTeams = teams.slice(0,5).map(playerObj => <Players key={ playerObj.id } handleClick={ handleClick } player={ playerObj } /> )
  return(
    <Grid.Row>
      <div className="">
        <h1>Choose Your Starting 5</h1>
        { renderTeams }
     </div>
    </Grid.Row>
  )
}

export default TeamContainer
