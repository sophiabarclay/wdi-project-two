const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Exhibition = require('../models/exhibition');
Exhibition.collection.drop();

const Upcoming = require('../models/upcoming');
Upcoming.collection.drop();

const exhibitionData = [
  {
    name: 'Roman Vishniac Rediscovered',
    location: 'The Photographers\' Gallery',
    address: '16 - 18 Ramillies Street, W1F 7LW',
    startDate: '26-10-2018',
    endDate: '24-02-2019',
    image: 'https://thephotographersgallery.org.uk/sites/default/files/RV%20Cl%20007.jpg'
  },
  {
    name: 'Shashin: are-bure-boke ',
    location: 'Michael Hoppen Gallery',
    address: '3 Jubilee Place, SW3 3TD',
    startDate: '14-09-2018',
    endDate: '12-11-2018',
    image: 'https://artlogic-res.cloudinary.com/w_1200,h_900,c_limit,f_auto,fl_lossy/ws-michaelhoppen/usr/exhibitions/images/179/17395-shot.jpg'
  },
  {
    name: 'Nick Brandt: This Empty World',
    location: 'Atlas Gallery',
    address: '49 Dorset Street, W1U 7NF',
    startDate: '07-02-2019',
    endDate: '07-03-2019',
    image: 'https://images.visualserver.com/userimages/11/11129/press/2_bus-station-with-elephant-in-dust-3200px_mediasmall.jpg'
  },
  {
    name: 'Taylor Wessing Photographic Portrait Prize',
    location: 'National Portrait Gallery',
    address: 'St Martin\'s Place, WC2H 0HE',
    startDate: '18-10-2018',
    endDate: '27-01-2019',
    image: 'https://d32dm0rphc51dk.cloudfront.net/jJXsl5ebP9GmTDO4HMISyQ/larger.jpg'
  },
  {
    name: 'Paris Photo 2018',
    location: 'Huxley & Parlour',
    address: '3-5 Swallow Street, W1B 4DE',
    startDate: '8-11-2018',
    endDate: '11-11-2018',
    image: 'https://huxleyparlour.com/app/uploads/2018/10/funglasses-1970-by-william-wegman-BHC3353.jpg'
  }
];

Exhibition
  .create(exhibitionData)
  .then(result => {
    console.log(`Created ${result.length} exhibitions` );
    mongoose.connection.close();
  });

const upcomingData = [
  {
    name: 'Shashin: are-bure-boke ',
    location: 'Michael Hoppen Gallery',
    address: '3 Jubilee Place, SW3 3TD',
    startDate: '14-09-2018',
    endDate: '12-11-2018',
    image: 'https://artlogic-res.cloudinary.com/w_1200,h_900,c_limit,f_auto,fl_lossy/ws-michaelhoppen/usr/exhibitions/images/179/17395-shot.jpg'
  },
  {
    name: 'Nick Brandt: This Empty World',
    location: 'Atlas Gallery',
    address: '49 Dorset Street, W1U 7NF',
    startDate: '07-02-2019',
    endDate: '07-03-2019',
    image: 'https://images.visualserver.com/userimages/11/11129/press/2_bus-station-with-elephant-in-dust-3200px_mediasmall.jpg'
  },
  {
    name: 'Taylor Wessing Photographic Portrait Prize',
    location: 'National Portrait Gallery',
    address: ' St Martin\'s Place, WC2H 0HE',
    startDate: '18-10-2018',
    endDate: '27-01-2019',
    image: 'https://d32dm0rphc51dk.cloudfront.net/jJXsl5ebP9GmTDO4HMISyQ/larger.jpg'
  }
];


Upcoming
  .create(upcomingData)
  .then(result => {
    console.log(`Created ${result.length} upcomings` );
    mongoose.connection.close();
  });
