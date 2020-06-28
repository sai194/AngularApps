# AngularApps

Start Express server
cd server
npm start

Start tdf AngularApps
ng serve


Create express app
npm install --save express body-parser cors

Use express generator to create express apps , creates a skeleton
npm install -g express-generator to install Express
express --view=pug <appName>

intall cors module
npm install --save cors

install mongoose
npm install --save mongoose

docker run --name grpc-mongo \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME='root' \
-e MONGO_INITDB_ROOT_PASSWORD='password' \
-d mongo

docker exec -it grpc-mongo bash
mongo -> takes u to cli

Use Robo3T to connect to mongodb
mongodb://root:password@localhost:27017

install jsonwebtoken module
npm install jsonwebtoken --save


create AngularApps
ng new reactive-forms
component ng g c component name
class ng g class class name
service ng g s service name
ng g m material to create module

Add material design
ng add @angular/material

Add bootstrap cdn link in index.html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

bootstrap card examples
https://coreui.io/docs/components/bootstrap/card/

or

npm install --save bootstrap jquery
Update angular.json file and add the file paths of Bootstrap CSS and JS files as well as jQuery to the styles and scripts arrays under the build target: "architect": { "build": { [...], "styles": [ "src/styles.css", "node_modules/bootstrap/dist/css/bootstrap.min.css" ], "scripts": [ "node_modules/jquery/dist/jquery.min.js", "node_modules/bootstrap/dist/js/bootstrap.min.js" ] }
