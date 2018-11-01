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
    startDate: '26-10-2018',
    endDate: '24-02-2019',
    image: 'https://thephotographersgallery.org.uk/sites/default/files/RV%20Cl%20007.jpg'
  },
  {
    name: 'Shashin: are-bure-boke ',
    location: 'Michael Hoppen Gallery',
    address: '3 Jubilee Place, London, SW3 3TD',
    startDate: '14-09-2018',
    endDate: '12-11-2018',
    image: 'https://artlogic-res.cloudinary.com/w_1200,h_900,c_limit,f_auto,fl_lossy/ws-michaelhoppen/usr/exhibitions/images/179/17395-shot.jpg'
  },
  {
    name: 'Nick Brandt: This Empty World',
    location: 'Atlas Gallery',
    address: '49 Dorset Street, London, W1U 7NF',
    startDate: '07-02-2019',
    endDate: '07-03-2019',
    image: 'https://images.visualserver.com/userimages/11/11129/press/2_bus-station-with-elephant-in-dust-3200px_mediasmall.jpg'
  },
  {
    name: 'Taylor Wessing Photographic Portrait Prize',
    location: 'National Portrait Gallery',
    address: ' St Martin\'s Place, London, WC2H 0HE',
    startDate: '18-10-2018',
    endDate: '27-01-2019',
    image: 'https://d32dm0rphc51dk.cloudfront.net/jJXsl5ebP9GmTDO4HMISyQ/larger.jpg'
  }
];

Exhibition
  .create(exhibitionData)
  .then(result => {
    console.log(`Created ${result.length} exhibitions` );
    mongoose.connection.close();
  });
