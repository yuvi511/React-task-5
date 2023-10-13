import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthDate: '',
      age: null,
    };
  }

  handleBirthDateChange = (event) => {
    this.setState({ birthDate: event.target.value });
  };

  calculateAge = () => {
    const birthDate = this.state.birthDate;
    if (birthDate) {
      const today = new Date();
      const birthDateArr = birthDate.split('-');
      const birthYear = parseInt(birthDateArr[2], 10);
      const birthMonth = parseInt(birthDateArr[1], 10) - 1;
      const birthDay = parseInt(birthDateArr[0], 10);

      const birthDateObj = new Date(birthYear, birthMonth, birthDay);
      const ageInMilliseconds = today - birthDateObj;
      const ageInYears = Math.floor(ageInMilliseconds / 31536000000); // Approximate milliseconds in a year
      this.setState({ age: ageInYears });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Age Calculator</h1>
        <label>Enter Your Date of Birth in dd-mm-yyyy:</label>
        <input
          type="text"
          value={this.state.birthDate}
          onChange={this.handleBirthDateChange}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>You are {this.state.age} years old.</p>
        )}
      </div>
    );
  }
}

export default App;
