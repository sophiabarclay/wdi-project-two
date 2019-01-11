#  ![GA](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) WDI Project Two: Photography LDN

## Brief
Design a full-stack Node app that meets the following technical requirements:

* Have at least 2 models – one representing a user and one that represents the main resource of your app.
* Include relationships - embedded or referenced.
* Have complete RESTful routes for at least one of your resources with all CRUD actions.
* Be deployed online and accessible to the public.
* Have semantically clean HTML
* The app should include authentication - with encrypted passwords & an authorisation flow.
* The app should be styled with Bulma.

**Timeframe**: 1 week

## Overview
View on Heroku [here.](https://fierce-earth-26546.herokuapp.com/)

A fully RESTful Express app showcasing upcoming photography exhibitions in London. The app allows users to register, login and logout, add, edit and delete exhibitions, and add and delete comments on exhibitions.

![Landing Page](images/p2-Demo.gif)

## Technologies Used

* HTML5
* CSS3
* JavaScript (ECMAScript 6)
* Git
* GitHub
* Node.js
* Express
* EJS
* MongoDB
* NodeJS

## Wins and Challenges

### Wins
I'm particularly happy with the visual design I achieved here, given only a short amount of time to style. Having initially felt hesitant about using Bulma as the CSS framework for this project, having previously only worked in vanilla CSS, I made reading the Bulma documentation a priority. When it came to styling my work, I found the framework satisfying and surprisingly adaptable to use. Lesson learned - always stay open to new ways of working. 

I am also pleased that I managed to implement session authentication in this project, as one of the more complex learnings of the lessons prior to commencing this project. By writing the checkAuthStatus function, I was able to check if the current user was logged in, and access the user's details (e.g usename). This was helpful in several sections of the project, one example being the comment section on the exhibition show pages, which would show either the option to leave a comment, or direct the user to log in depending on isLoggedIn being true or false.

<pre>
function checkAuthStatus(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  if (req.session.userId) {
    User.findById(req.session.userId)
      .then(user => {
        res.locals.currentUser = user;
        res.locals.isLoggedIn = true;
        console.log('==>', res.currentUser);
        next();
      });
  } else {
    next();
  }
}
</pre>

#### Comments section:
```
<div class="ratingSection column is-5">
    <% if(locals.isLoggedIn) { %>
      <form action='/exhibitions/<%= id %>/ratings' method="post">
      <h3 class="is-size-4">Leave a review</h3>
      <div class="columns">
        <label class="has-text-right column is-4" for='user'>Username</label>
        <b><input class="column is-8 input" name='user' value='<%= locals.currentUser.username %>'/></b>
      </div>
      ...
    <% } else { %>
        <h3 class="is-size-4">Leave a review</h3>
        <p>Please <a href="/login"><strong>log in</strong></a> to leave a review of this exhibition.</p>
    <% } %>
```


### Challenges
Reflecting on this project, I realise I could have integrated more features if I had been slightly more ambitious in my planning. While I am satisfied with how I outlined and reached my MVP, in future, I will create a wishlist of post-MVP features to keep at hand as a reminder of the potential scope of a project. This will encourage me to keep pushing against the upper limit of my expectations. 

## Future Features
* Make website mobile responsive
* Auto input username when leaving a review of an exhibition
* Limit ability to delete exhibitions and comments to user that created them
