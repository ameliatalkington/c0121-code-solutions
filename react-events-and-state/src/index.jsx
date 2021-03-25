import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      text: 'Click Me!'
    };
  }

  handleClick(event) {
    if (this.state.isClicked) {
      this.setState({
        isClicked: false,
        text: 'Click Me!'
      });
    } else {
      this.setState({
        isClicked: true,
        text: 'Thank you!'
      });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.text}</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
