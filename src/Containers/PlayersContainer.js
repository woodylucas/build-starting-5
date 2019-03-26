import React from 'react'
import Players from '../Components/Players'
import Form from '../Components/Form'
import Search from '../Components/Search'
import { Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'


class PlayersContainer extends React.Component {
    render() {
    const { players, handleClick } = this.props
    const renderPlayers = players.map(playerObj => <Players key={ playerObj.id } player={ playerObj } handleClick={ handleClick } />)
    return(
      <Segment>
        <Form submitHandler={this.props.submitHandler} />
        <Search changeHandler={this.props.changeHandler} value={this.props.value}/>
        <Grid.Row columns={4}>
            { renderPlayers }
        </Grid.Row>
      </Segment>
    )
  }
}

export default PlayersContainer
