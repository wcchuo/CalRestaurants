# CalRestaurants

#####Mac OS X Yosemite Environment
####Setup Instructions:
1. Make sure your environment has preinstalled <a href='http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/'>Node.js</a> & <a href='http://www.mongodbspain.com/en/2014/11/06/install-mongodb-on-mac-os-x-yosemite/'>MongoDB</a>. 
2. Make sure your MongoDB is running (open two Terminal windows and run 'sudo mongod' & 'mongo' separately).
3. Use Terminal to clone the <a href='https://github.com/wcchuo/CalRestaurants'>https://github.com/wcchuo/CalRestaurants.git</a>.
4. This repository comes with npm_modules, just to be sure open another Terminal, go to the cloned directory and run 'npm install', all dependencies in package.json will be installed: express, express-session, body-parser, cookie-parser, compression, method-override, morgan, ejs, mongoose, connect-flash, passport, passport-local, passport-facebook.
5. Run 'node server.js', the server will be running at http://localhost:3000/
6. Something wrong? Email <a href='mailto:wcchuo@yahoo.com'>wcchuo@yahoo.com</a>.

####More features to come:
1. Complete customer ordering features using AngularJS, modal for order edit and submission.
2. Create UI interface for restaurant operators to track orders (upcoming, picked up, missed, cancelled) & pick up time.
3. Add SMS feature using Twilio API to remind customer to pick up orders.
4. Add Stripe payment API.
5. Screenshots/wireframe <a href='https://www.dropbox.com/s/vfuzqhibw8bpc5d/CalRestaurants.pdf?dl=0'>here</a>.

Disclaimer: This project is for educational purpose.


