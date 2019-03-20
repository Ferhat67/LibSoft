# LibSoft

A web-based application for management and use of a university library.
It uses the CoBAUI framework (https://www.npmjs.com/package/cobaui) to implement an adaptive user interface.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Installation

1. Clone this repository `git clone https://github.com/Ferhat67/LibSoft.git`
2. Enter LibSoft directory and run `npm install` to install dependencies
3. Run `ng serve` to run application
4. Access `https://localhost:4200/` in your browser to use application

Alternatively, use `ng build --prod` to generate application files (html,js,css) for 
productive use on a web server.

## Runtime Adaptation

1. Navigation menu position is adapted based on user's handedness to allow faster reachability.
This feature uses the device's Gyroscope Sensor.

2. A "dark theme" is activated in low ambient light conditions to allow better readability and reduce eye strain.
This feature needs access to the device's Ambient Light Sensor and requires the application to use https.

3. A compact navigation menu is displayed to more experienced users, while new users are shown a more detailed menu.
The users experience is measured by the usage time in minutes. Users with a usage time below 5 minutes are considered new.

## User Accounts

There are two user roles in LibSoft: Students and Staff Members.

* Student: Max Mustermann
  * Username: mmuster
  * Password: student123
* Staff Member: John Doe
  * Username: johndoe
  * Password: staff123
