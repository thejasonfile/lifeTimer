import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Results from './Results';

const DateForm = (props) => {
  let months = [
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

  let handleSubmit = (event) => {
    event.preventDefault();
    props.calculateBirthday(props.year, props.month, props.date);
  }

  return (
    <Router>
      <div className="DateForm">
        <form onSubmit={handleSubmit}>
          <label>Month</label>
          <select value={props.month} onChange={props.changeMonth}>
            {months.map(month => <option key={month.value} value={month.value}>{month.name}</option>
            )}
          </select>
        <label>Date</label>
        <input type="number" value={props.date} onChange={props.changeDate} />
          <label>Year</label>
          <input type="number" value={props.year} onChange={props.changeYear} />
        <Link to="/results"><input type="submit" value="Submit" /></Link>
        </form>
        <Route path="/results" component={Results} />
      </div>
    </Router>
  )
}

export default DateForm;
