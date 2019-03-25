import React from 'react'
import Players from '../Components/Players'
import Form from '../Components/Form'
import Search from '../Components/Search'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'


class PlayersContainer extends React.Component {
    render() {
    const { players, handleClick } = this.props
    const renderPlayers = players.map(playerObj => <Players key={ playerObj.id } player={ playerObj } handleClick={ handleClick } />)
    return(
      <Container className="players-container" textAlign='center'>
        <Form submitHandler={this.props.submitHandler} />
        <Search changeHandler={this.props.changeHandler} value={this.props.value}/>
        <Grid columns='equal'>
          <Grid.Row>
            { renderPlayers }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default PlayersContainer
