import React from 'react';
export default class Greeting extends React.Component {
  constructor() {

    super();
    this.state = {
      counter: 0,
      isVisible: true,
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0

        }
      ]
    }
  }

  handleClick() {

    let count = this.state.counter + 1;

    const newPeople = this.state.people.map((value) => {
      return Object.assign({}, value, {kills: count});
    })
    this.setState({
      counter: count,
      people: newPeople
    });


  }


  handleToggle() {

    if (this.state.isVisible === true) {
      this.setState({
        isVisible: false
      })
    }
    else {
      this.setState({
        isVisible: true
      })
    }
  }

  createPeople() {
    return (
      <ul>
        {this.state.people.map((value, index) => {
            return <li key={index + value.name}>{value.name + ' ' + value.kills}</li>
          }
        )}
      </ul>
    )
  }

  render() {

    let conterElem;
    if (this.state.isVisible) {
      conterElem = <p>counter - {this.state.counter}</p>
    } else {
      conterElem = null;
    }


    return (
      <div>
        <p>My name is {this.props.name} and my age is {this.props.age}</p>
        {conterElem}
        <div>

        </div>
        <button onClick={() => this.handleClick()}>Inc me!</button>
        <button onClick={() => this.handleToggle()}>Toggle me!</button>
        {this.createPeople()}
      </div>
    )
  }
}






