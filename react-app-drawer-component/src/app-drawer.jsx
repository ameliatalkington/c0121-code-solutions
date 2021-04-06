import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageView: 'home'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.pageView === 'home') {
      this.setState({pageView: 'menu'});
    } else {
      this.setState({ pageView: 'home' });
    }
  }

  render() {
    if (this.state.pageView === 'home') {
      return (
        <>
          <i onClick={this.handleClick} className="fas fa-bars icon"></i>
        </>
      );
    } else {
      return (
        <div onClick={this.handleClick} className='modal'>
          <div className='menu'>
            <div className='titles'>
              <h1 onClick={this.handleClick}>Menu</h1>
              <h3 onClick={this.handleClick}>About</h3>
              <h3 onClick={this.handleClick}>Get Started</h3>
              <h3 onClick={this.handleClick}>Sign In</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}
