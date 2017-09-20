import React, {Component} from 'react';
import moment from 'moment';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      difference: '',
      timeOnSite: 0,
      secondsLeft: 0
    };

    this.calculateDifference = this.calculateDifference.bind(this);
    this.calculateSecondsLeft = this.calculateSecondsLeft.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.calculateDifference(), 1000);
    this.interval2 = setInterval(() => this.calculateSecondsLeft(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  calculateDifference() {
    var now = Date.now();
    var difference = (now / 1000 - this.props.birthday / 1000).toFixed(0);
    difference = Number(difference);
    difference = difference.toLocaleString();
    this.setState({difference});
  };

  calculateSecondsLeft() {
    // var now = moment().valueOf();
    // var birthday = this.props.birthday;
    // var deathTime = moment(birthday).add(78, 'years');
    // var secondsLeft = moment(deathTime - now);
    //this.setState({secondsLeft});
    // debugger;
  }

  renderTimes() {
    return (
      <div>
        <h1>You've been alive for {this.state.difference} seconds.</h1>
        <h1>You've spent {this.props.timeOnSite} of those seconds here.</h1>
        <h1>On average you have {this.state.secondsLeft} seconds left. </h1>
      </div>
    )
  }

  render() {
    return(
      <div>
        {!this.props.birthday
          ? <h1>Please Enter a Date</h1>
          : this.renderTimes()
        }
      </div>

    )
  }
}

export default Results;
