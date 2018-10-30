const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Exhibition = require('../models/Exhibition');
Exhibition.collection.drop();

const exhibitionData = [
  {
    name: 'Roman Vishniac Rediscovered',
    location: 'The Photographers\' Gallery',
    address: '16 - 18 Ramillies Street, London, W1F 7LW',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Paris%2C_Texas_%281984_film_poster%29.png/220px-Paris%2C_Texas_%281984_film_poster%29.png'
  },
  {
    name: 'AAAAA',
    location: 'BBBBB',
    address: 'CCCCC',
    image: 'https://cdn.londonandpartners.com/asset/d0fdb4548a1a96bbc17ec7b0af191bce.jpg'
  },
  {
    name: 'DDDDD',
    location: 'EEEEE',
    address: 'FFFFF',
    image: 'https://cdn.londonandpartners.com/asset/d0fdb4548a1a96bbc17ec7b0af191bce.jpg'
  }
];

Exhibition
  .create(exhibitionData)
  .then(result => {
    console.log(`Created ${result.length} exhibitions` );
    mongoose.connection.close();
  });
