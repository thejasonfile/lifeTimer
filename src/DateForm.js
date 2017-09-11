import React from 'react';

const DateForm = (props) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your birthday is ${props.month} ${props.date}, ${props.year}`)
  }

  return (
    <div className="DateForm">
      <form onSubmit={handleSubmit}>
        <label>Month</label>
        <select value={props.month} onChange={props.changeMonth}>
          {months.map(month => <option key={month} value={month}>{month}</option>
          )}
        </select>
      <label>Date</label>
      <input type="number" value={props.date} onChange={props.changeDate} />
        <label>Year</label>
        <input type="number" value={props.year} onChange={props.changeYear} />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default DateForm;
