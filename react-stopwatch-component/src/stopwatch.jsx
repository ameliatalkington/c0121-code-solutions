import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pause',
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearStopwatch = this.clearStopwatch.bind(this);
  }

  handleClick() {
    if (this.state.status === 'pause') {
      this.setState({status: 'play'});
      this.interval = setInterval(() => {
        this.setState({seconds: this.state.seconds + 1});
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.setState({ status: 'pause' });
    }
  }

  clearStopwatch() {
    if (this.state.status === 'pause') {
      this.setState({seconds: 0});
    }
  }

  render() {
    let status = this.state.status;
    let icon;

    if (status === 'pause') {
      icon = "fas fa-play";
    } else {
      icon = "fas fa-pause";
    }

    return (
      <div className='stopwatch'>
        <div onClick={this.clearStopwatch} className='timer'>
          <p className='time'>{this.state.seconds}</p>
        </div>
        <div className='icon'>
          <i onClick={this.handleClick} className={icon}></i>
        </div>
      </div>
    );
  }
}
