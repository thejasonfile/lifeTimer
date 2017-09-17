import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Results from './Results';

class DateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month : 'January',
      date : '',
      year : ''
    };

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
      <Router>
        <div className="DateForm">
          <form>
            <label>Month</label>
            <select value={this.state.month} onChange={this.handleMonthChange}>
              {this.monthsList().map(month => <option key={month.value} value={month.value}>{month.name}</option>
              )}
            </select>
          <label>Date</label>
          <input type="number" value={this.state.date} onChange={this.handleDateChange} />
            <label>Year</label>
            <input type="number" value={this.state.year} onChange={this.handleYearChange} />
          <Link to="/results"><input type="submit" value="Submit" /></Link>
          </form>
          <Route
            path="/results"
            month={this.state.month}
            date={this.state.date}
            year={this.state.year}
            component={Results}
          />
        </div>
      </Router>
    )
  }
}

export default DateForm;
