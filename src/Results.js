import React, {Component} from 'react';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      difference: '',
      timeOnSite: 0
    };

    this.calculateDifference = this.calculateDifference.bind(this);
    this.calculateTimeOnSite = this.calculateTimeOnSite.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.calculateDifference(), 1000);
    this.interval2 = setInterval(() => this.calculateTimeOnSite(), 1000);
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

  calculateTimeOnSite() {
    var currentTime = this.state.timeOnSite;
    var newTime = Number(currentTime) + 1;
    newTime = newTime.toLocaleString();
    this.setState({timeOnSite: newTime});
  }

  renderTimes() {
    return (
      <div>
        <h1>You've been alive for {this.state.difference} seconds.</h1>
        <h1>You've spent {this.state.timeOnSite} of those seconds here.</h1>
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
