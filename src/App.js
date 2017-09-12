import React, { Component } from 'react';
import DateForm from './DateForm';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month : 'January',
      date : '',
      year : '',
      birthday: 0,
      difference: 0
    }

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.calculateBirthday = this.calculateBirthday.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ difference: (Date.now() / 1000 - this.state.birthday / 1000).toFixed(0)}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMonthChange(event) {
    this.setState({month: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleYearChange(event) {
    this.setState({year: event.target.value})
  }

  calculateBirthday(year, month, date) {
    var birthdayDate = new Date(year, month, date);
    this.setState({birthday: birthdayDate.getTime()});
  }

  render() {
    return (
      <div className="App">
        <DateForm
          month={this.state.month}
          date={this.state.date}
          year={this.state.year}
          changeMonth={this.handleMonthChange}
          changeDate={this.handleDateChange}
          changeYear={this.handleYearChange}
          calculateNow={this.calculateNow}
          calculateBirthday={this.calculateBirthday}
          updateDifference={this.updateDifference}
        />
      <Results totalSeconds={this.state.difference}/>
      </div>
    );
  }
}

export default App;
