import React, {Component} from 'react';

class Results extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.calculateDifference(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateBirthday(year, month, date) {
    var birthdayDate = new Date(year, month, date);
    return birthdayDate.getTime();
  }

  calculateDifference() {
    var now = Date.now();
    var birthday = this.calculateBirthday;
    var difference = (now / 1000 - birthday / 1000).toFixed(0);

    console.log(difference);
    return difference;
  };

  render() {
    return(
      <div>You've been alive for {this.calculateDifference} seconds.</div>
    )
  }
}

export default Results;
