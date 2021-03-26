import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from '../src/accordion';

const languages = [
  {
    name: 'Hypertext Markup Language',
    description: 'kjasdk;fhadjkfa;hkjfa;kfjdah;fakdjfh;kjahdlfakjdfha'
  },
  {
    name: 'Cascading Style Sheets',
    description: 'kjasdk;fhadjkfa;hkjfa;kfjdah;fakdjfh;kjahdlfakjdfha'
  },
  {
    name: 'Javascript',
    description: 'kjasdk;fhadjkfa;hkjfa;kfjdah;fakdjfh;kjahdlfakjdfha'
  }
];

ReactDOM.render(
  <Accordion languages={languages}/>,
  document.querySelector('main')
);
