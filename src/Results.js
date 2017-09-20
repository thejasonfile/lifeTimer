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

  componentDidMount() {
    this.interval = setInterval(() => this.calculateSecondsAlive(), 1000);
    this.interval2 = setInterval(() => this.calculateSecondsLeft(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  calculateNowUnix() {
    return moment().unix();
  }

  calculateSecondsAlive() {
    var nowUnix = this.calculateNowUnix()   ;
    var secondsAlive = (nowUnix - this.props.birthday);
    secondsAlive = secondsAlive.toLocaleString();
    this.setState({secondsAlive});
  };

  calculateSecondsLeft() {
    var nowUnix = this.calculateNowUnix();
    var birthday = this.props.birthday;
    var deathTime = moment(birthday).add(78, 'years').unix();
    var secondsLeft = moment(deathTime - nowUnix)._i;
    secondsLeft = secondsLeft.toLocaleString();
    this.setState({secondsLeft});
  }

  renderTimes() {
    return (
      <div>
        <h1>You've been alive for {this.state.secondsAlive} seconds.</h1>
        <h1>You've spent {this.props.timeOnSite} of those seconds here.</h1>
        <h1>On average you have {this.state.secondsLeft} seconds left in your life.  Make them count! </h1>
      </div>
    )
  }

  render() {
    return(
      <div>
        {!this.props.birthday
          ? <h1>Enter your birthday</h1>
          : this.renderTimes()
        }
      </div>

    )
  }
}

export default Results;
