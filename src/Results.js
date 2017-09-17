import React, {Component} from 'react';

class Results extends Component {

  // componentDidMount() {
  //   this.interval = setInterval(() => this.calculateDifference(), 1000);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  calculateDifference() {
    var now = Date.now();
    var birthday = this.props.calculateBirthday(this.props.year, this.props.month, this.props.date);
    var difference = (now / 1000 - birthday / 1000).toFixed(0);
    console.log(difference);
    return difference;
  };

  render() {
    return(
      <div>You've been alive for {this.calculateDifference()} seconds.</div>
    )
  }
}

export default Results;
