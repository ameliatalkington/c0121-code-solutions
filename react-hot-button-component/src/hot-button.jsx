import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    });
  }

  render() {
    let className;
    if (this.state.count < 4) {
      className = 'hot-button cold';
    } else if (this.state.count < 7) {
      className = 'hot-button cool';
    } else if (this.state.count < 10) {
      className = 'hot-button tepid';
    } else if (this.state.count < 13) {
      className = 'hot-button warm';
    } else if (this.state.count < 16) {
      className = 'hot-button hot';
    } else {
      className = 'hot-button nuclear';
    }

    return (
      <>
        <button onClick={this.handleClick} className={className}>Hot Button</button>
        <p className='click-count'>Clicks: {this.state.count}</p>
      </>
    );
  }
}
