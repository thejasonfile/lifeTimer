import React, {Component} from 'react';
import moment from 'moment';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsAlive: '',
      secondsLeft: 0
    };

    this.calculateSecondsAlive = this.calculateSecondsAlive.bind(this);
    this.calculateSecondsLeft = this.calculateSecondsLeft.bind(this);
  }

  componentWillMount() {
    if(this.props.birthday) {
      this.interval = setInterval(() => this.calculateSecondsAlive(), 1000);
      this.interval2 = setInterval(() => this.calculateSecondsLeft(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  calculateSecondsAlive() {
    var now = moment().unix();
    var secondsAlive = (now - this.props.birthday);
    secondsAlive = secondsAlive.toLocaleString();
    this.setState({secondsAlive});
  };

  calculateSecondsLeft() {
    var nowUnix = moment().valueOf();
    var birthday = this.props.birthday;
    var deathTime = moment(birthday).add(78, 'years');
    var secondsLeft = moment(deathTime - nowUnix);
    //this.setState({secondsLeft});
    // debugger;
  }

  renderTimes() {
    return (
      <div>
        <h1>You've been alive for {this.state.secondsAlive} seconds.</h1>
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
