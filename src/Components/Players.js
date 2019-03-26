import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Players = (props) => {
  const { player, handleClick } = props
  return (
    <Grid.Column>
      <Image onClick={ handleClick ? () => handleClick(player) : null } src={ player.image } size='small' wrapped/>
    </Grid.Column>
  )
}


export default Players
