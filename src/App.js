import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import moment from 'moment';

import DateForm from './DateForm';
import Results from './Results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeOnSite: 0,
      birthday: ''
    };

    this.calculateBirthday = this.calculateBirthday.bind(this);
    this.calculateTimeOnSite = this.calculateTimeOnSite.bind(this);
  }

  calculateTimeOnSite() {
    var currentTime = this.state.timeOnSite;
    var newTime = Number(currentTime) + 1;
    newTime = newTime.toLocaleString();
    this.setState({timeOnSite: newTime});
  }

  calculateBirthday(year, month, date) {
    var birthdayDate = new Date(year, month, date);
    this.setState({birthday: birthdayDate.getTime()});
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' render={() =>  <DateForm calculateBirthday={this.calculateBirthday} />
          }></Route>
        <Route path='/results' render={() => <Results birthday={this.state.birthday} timeOnSite={this.state.timeOnSite}/>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
