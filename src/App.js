import React, { Component } from 'react';
import DateForm from './DateForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month : 'January',
      date : '',
      year : ''
    }

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
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
        />
      </div>
    );
  }
}

export default App;
