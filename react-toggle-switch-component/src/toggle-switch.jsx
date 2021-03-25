import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      if (prevState.status === 'off') {
        return {status: 'on'}
      } else {
        return {status: 'off'}
      }
    });
  }

  render() {
    let status = this.state.status;
    return (
      <>
        <label className='switch'>
          <input onClick={this.handleClick} type="checkbox" className='checkbox'></input>
          <div className={`slider ${status}`}>
            <div className={`slider-button ${status}`}></div>
          </div>
        </label>
        <p>{status}</p>
      </>
    );
  }
}
