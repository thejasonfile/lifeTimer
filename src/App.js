import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <DateForm />
      </div>
    );
  }
}

class DateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month : '',
      date : '',
      year : ''
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange(val) {
    this.setState({month: val.value})
  }

  render() {
    return (
      <div className="DateForm">
        <Select name="form-field-name" value={this.state.month} options={options} onChange={this.handleMonthChange} placeholder="Select month..."/>
      </div>
    )
  }
}

export default App;
