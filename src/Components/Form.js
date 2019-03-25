import React from 'react'

class Form extends React.Component {
  state = {
    name: "",
    image: "",

  }

  changeHandler = (event) => {
    console.log(event.target.value)

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state)
    this.setState({
      name: "",
      image: ""
    })
  }


  render() {
    return(
      <div className="form">
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler}  />
          <input type="text" placeholder="image" name="image" value={this.state.image} onChange={this.changeHandler} />
          <button>Create Player</button>
        </form>
      </div>
    )
  }
}

export default Form
