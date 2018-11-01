const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Exhibition = require('../models/exhibition');
Exhibition.collection.drop();

const exhibitionData = [
  {
    name: 'Roman Vishniac Rediscovered',
    location: 'The Photographers\' Gallery',
    address: '16 - 18 Ramillies Street, London, W1F 7LW',
    image: 'https://thephotographersgallery.org.uk/sites/default/files/09_Press%20Image%20l%20Roman%20Vischniac%20lCustomers%20waiting%2C%20New%20York%2C%201941-44%20%20copy.jpg'
  },
  {
    name: 'Shashin: are-bure-boke ',
    location: 'Michael Hoppen Gallery',
    address: '3 Jubilee Place, London, SW3 3TD',
    image: 'https://artlogic-res.cloudinary.com/w_1200,h_900,c_limit,f_auto,fl_lossy/ws-michaelhoppen/usr/exhibitions/images/179/17395-shot.jpg'
  },
  {
    name: 'Nick Brandt: This Empty World',
    location: 'Atlas Gallery',
    address: '49 Dorset Street, London, W1U 7NF',
    image: 'https://images.visualserver.com/userimages/11/11129/press/2_bus-station-with-elephant-in-dust-3200px_mediasmall.jpg'
  }
];

Exhibition
  .create(exhibitionData)
  .then(result => {
    console.log(`Created ${result.length} exhibitions` );
    mongoose.connection.close();
  });
