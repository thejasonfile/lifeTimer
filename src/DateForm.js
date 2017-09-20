import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validDate = this.validDate.bind(this);
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

  handleSubmit(e){
      this.props.calculateBirthday(this.state.year, this.state.month, this.state.date)
  }

  validDate() {
    if(this.state.date && this.state.year) {
      return true;
    } else {
      return false;
    }
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
        <h1>Enter your birthday</h1>
        <form>
          <label htmlFor="month">Month</label>
          <select id="month" value={this.state.month} onChange={this.handleMonthChange}>
            {this.monthsList().map(month => <option key={month.value} value={month.value}>{month.name}</option>
            )}
          </select>
        <label htmlFor="date">Date</label>
        <input type="number" value={this.state.date} onChange={this.handleDateChange} />
          <label htmlFor="year">Year</label>
          <input type="number" value={this.state.year} onChange={this.handleYearChange} />
        <Link to='/results' onClick={this.handleSubmit}><button>Submit</button></Link>
        </form>
      </div>
    )
  }
}

export default DateForm;
