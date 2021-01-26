// const { PureComponent } = require("react");

var orderHistory = [
  {
    order_placed: { month: 'August', day: 4, year: 2020 },
    total: 34.00,
    ship_to: 'JS Masher',
    order_number: '114-3941689-8772232',
    delivery_date: { delivered: 'Delivered', month: 'Aug', day: 8, year: 2020 },
    order: [{
      product_name: 'Javascript for impatient programmers',
      author: 'Rauschmayer, Dr. Axel',
      return_window: 'Return window closed on Sep 7, 2020',
      price: 31.55
    }]
  },
  {
    order_placed: { month: 'July', day: 19, year: 2020 },
    total: 44.53,
    ship_to: 'JS Masher',
    order_number: '113-9984268-1280257',
    delivery_date: { delivered: 'Delivered', month: 'Jul', day: 20, year: 2020 },
    delivery_message: 'Your package was delivered. It was handed directly to a resident.',
    order: [{
      product_name: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      return_window: 'Return window closed on Aug 19, 2020',
      price: 41.33
    }]
  },
  {
    order_placed: { month: 'July', day: 4, year: 2020 },
    total: 17.22,
    ship_to: 'JS Masher',
    order_number: '114-2875557-9059409',
    delivery_date: { delivered: 'Delivered', month: 'Jul', day: 7, year: 2020 },
    delivery_message: 'Your package was delivered. It was handed directly to a resident.',
    order: [{
      product_name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter ' +
        'for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      return_window: 'Return window closed on Aug 5, 2020',
      price: 15.98
    }]
  },
  {
    order_placed: { month: 'July', day: 3, year: 2020 },
    total: 138.93,
    ship_to: 'JS Masher',
    order_number: '113-2883177-2648248',
    delivery_date: { delivered: 'Delivered', month: 'Jul', day: 5, year: 2020 },
    order: [{
      product_name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
      return_window: 'Return window closed on Aug 4, 2020',
      price: 94.95
    },
    {
      product_name: 'The Art of Sql',
      author: 'Faroult, Stephane',
      return_window: 'Return window closed on Aug 4, 2020',
      price: 33.99
    }]
  }
];
