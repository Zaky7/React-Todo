// eslint-disable-max-classes-per-file: "error"
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => (props.showPerson ? 'red' : 'green')};
  font: inherit;
  border: 1px solid blue;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 18px;
  color: white;

  &:hover {
    background-color: ${props => (props.showPerson ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

const StyledParagraph = styled.p`
  font-weight: ${props => (props.personsLength <= 1 ? 'bold' : 'normal')};
  color: ${props => (props.personsLength <= 2 ? 'red' : 'black')};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 29 },
        { id: 2, name: 'Harish', age: 17 },
        { id: 3, name: 'Rashid', age: 34 },
      ],
    };
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Max', age: 29 },
        { id: 2, name: 'Zakir', age: 17 },
        // { name: "Rashid", age: 34 }
      ],
      showPersons: false,
    });
  };

  onChangeHandler = event => {
    this.setState({
      persons: [
        { id: 1, name: 'Zakir', age: 21 },
        { id: 2, name: event.target.value, age: 21 },
        { id: 3, name: 'Rashid', age: 34 },
      ],
    });
  };

  togglePersonVisibility = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons,
    });
  };

  nameChangeHandler = (event, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(person => person.id === id);

    const person = {
      ...persons[personIndex],
    };

    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;
    this.setState({
      persons: newPersons,
    });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const index = persons.findIndex(person => person.id === personIndex);

    if (index !== -1) {
      const newPersons = [...persons];
      newPersons.splice(index, 1);
      this.setState({
        persons: newPersons,
      });
    }
  };

  render() {
    // Inline style
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px 20px',
      cursor: 'pointer',
      borderRadius: '18px',
      color: 'white',
    };

    let personList = null;
    const { showPersons, persons } = this.state;

    // const paragraphClasses = [];
    // if (persons.length <= 2) {
    //   paragraphClasses.push('red');
    // }

    // if (persons.length <= 1) {
    //   paragraphClasses.push('bold');
    // }

    if (showPersons) {
      personList = (
        <div>
          {persons.map(person => (
            <Person
              deleteElement={() => this.deletePersonHandler(person.id)}
              key={person.id}
              name={person.name}
              age={person.age}
              Id={person.id}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );

      style.backgroundColor = '#0087ff';
    }

    return (
      <div className="App">
        <StyledButton showPerson={showPersons} type="button" onClick={this.togglePersonVisibility}>
          Switch Name
        </StyledButton>
        <StyledParagraph personsLength={persons.length}>
          This is paragraph written by me!!
        </StyledParagraph>
        {personList}
      </div>
    );
    // return React.createElement('div', {className: 'App' },
    // React.createElement('h1', null, 'I am writing React App for the First Time'))
  }
}

export default App;
