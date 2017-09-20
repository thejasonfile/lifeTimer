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
      birthdayUnix: ''
    };

    this.calculateBirthday = this.calculateBirthday.bind(this);
    this.calculateTimeOnSite = this.calculateTimeOnSite.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.calculateTimeOnSite(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateTimeOnSite() {
    var currentTime = Number(this.state.timeOnSite) + 1;
    currentTime = currentTime.toLocaleString();
    this.setState({timeOnSite: currentTime});
  }

  calculateBirthday(year, month, date) {
    var birthdayUnix = moment(`${year}-${month}-${date}`, "YYYY-MM-DD").valueOf();
    this.setState({birthdayUnix});
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' render={() =>  <DateForm calculateBirthday={this.calculateBirthday} />
          }></Route>
        <Route path='/results' render={() => <Results birthday={this.state.birthdayUnix} timeOnSite={this.state.timeOnSite}/>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
