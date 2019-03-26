import React, { Component } from 'react';
import './App.css';
import PlayersContainer from './Containers/PlayersContainer'
import TeamsContainer from './Containers/TeamsContainer'
import { Grid, Segment } from 'semantic-ui-react'



class App extends Component {
  state = {
    players: [],
    teams: [],
    filteredPlayers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/players')
    .then(resp => resp.json())
    .then(players => this.setState({
      players: players,
      filteredPlayers: players
    }))
  }

  handleClick = (playerObj) => {
    console.log(playerObj)
    this.setState({ teams: [...this.state.teams, playerObj] })
  }

  removeClick = (playerObj) => {
    const teamsArray = [...this.state.teams]
    const removeObjArray = teamsArray.filter(player => player.id !== playerObj.id)
    this.setState( { teams: removeObjArray } )
  }


  submitHandler = (playerObj) => {
    this.setState({
      filteredPlayers: [playerObj, ...this.state.filteredPlayers]
    })
  }


  changeHandler = (event) => {
    const value = event.target.value
    const copyPlayersArray = [...this.state.players]
    const filteredPlayers = copyPlayersArray.filter(player => player.name.toLowerCase().includes(value.toLowerCase()))

    this.setState({
      filteredPlayers: filteredPlayers,
      searchTerm: value
     })
  }



  render() {
    const { players, teams, filteredPlayers } = this.state
    return (
      <Segment textAlign='center'>
        <Grid>
          <Grid.Row columns={2}>
            <PlayersContainer changeHandler={this.changeHandler} value={this.props.searchTerm} submitHandler={this.submitHandler} handleClick={this.handleClick} players={ filteredPlayers } />
            <TeamsContainer teams={ teams } handleClick={ this.removeClick } />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default App;
