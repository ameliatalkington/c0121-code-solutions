import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: ''
    }
    this.languages = props.languages;
  }

  handleClick(event) {
    this.setState({name: event.target.firstChild.textContent});
    console.log(this.state);
  }

  render() {
    this.namesList = this.languages.map(language =>
      <div key={language.name} onClick={this.handleClick}>
        {language.name}
        <div className={language.name}>
          {language.description}
        </div>
      </div>
    );

    console.log(this.namesList);

    return (
      <>
        {this.namesList}
      </>
    );
  }
}
