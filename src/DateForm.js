import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Results from './Results';

class DateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month : '0',
      date : '',
      year : '',
      birthday: ''
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.calculateBirthday = this.calculateBirthday.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return birthdayDate.getTime();
  }

  handleSubmit(e){
    e.preventDefault();
    this.calculateBirthday(this.state.year, this.state.month, this.state.date);
  }

  monthsList() {
    return [
    {value: 0, name: 'January'},
    {value: 1, name: 'February'},
    {value: 2, name: 'March'},
    {value: 3, name: 'April'},
    {value: 4, name: 'May'},
    {value: 5, name: 'June'},
    {value: 6, name: 'July'},
    {value: 7, name: 'August'},
    {value: 8, name: 'September'},
    {value: 9, name: 'October'},
    {value: 10, name: 'November'},
    {value: 11, name: 'December'}
    ]
  }

  render() {
    return (
      <div className="DateForm">
        <form onSubmit={this.handleSubmit}>
          <label>Month</label>
          <select value={this.state.month} onChange={this.handleMonthChange}>
            {this.monthsList().map(month => <option key={month.value} value={month.value}>{month.name}</option>
            )}
          </select>
        <label>Date</label>
        <input type="number" value={this.state.date} onChange={this.handleDateChange} />
          <label>Year</label>
          <input type="number" value={this.state.year} onChange={this.handleYearChange} />
        <Link to='/results'><input type="submit" value="Submit" /></Link>
        </form>
        <Results calculateBirthday={this.calculateBirthday}/>
      </div>
    )
  }
}

export default DateForm;
