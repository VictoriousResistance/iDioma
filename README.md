# iDioma
An app that connects language learners
[![Stories in Ready](https://badge.waffle.io/VictoriousResistance/iDioma.png?label=ready&title=Ready)](https://waffle.io/VictoriousResistance/iDioma)


1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Tech Stack](#tech-stack)
4. [Schema](#schema)
5. [Development](#development)
    1. [Setting up MySQL database](#setting-up-mysql-database)
    2. [Adding MySQL password](#adding-mysql-password)
    3. [Adding Facebook OAuth configuration](#adding-facebook-oauth-configuration)
    4. [Installing Dependencies](#installing-dependencies)
    5. [Starting MySQL server](#starting-mysql-server)
    6. [Starting server locally](#starting-server-locally)
6. [Team](#team)
7. [Current Build Health](#current-build-health)
8. [Roadmap](#roadmap)


## Usage
See the app in action [here](http://idioma.live/).

## Requirements

Node v5.8  
Webpack  
MySQL

## Tech Stack
- [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/)
- [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- [Sequelize ORM](http://docs.sequelizejs.com/en/latest/) and [MySQL](https://www.mysql.com/)

## Schema 
<img src="http://imgur.com/cC8MQUs.png" width="550px"/>

## Development

### Setting up MySQL database
(If you don't have Homebrew installed, go to http://brew.sh/ to install Homebrew.)
```sh
brew install mysql
mysql -u root
CREATE DATABASE idioma
```

### Adding MySQL password

Navigate to server/db, add a `config.js` file and export your mysql root user password as a string. This file is git ignored.
Format: `module.exports = 'password';`

### Adding Facebook OAuth configuration

Navigate to server/auth, add a `config.js` file and export your facebook OAuth client ID and secret in an object. This file is git ignored.
Format: `module.exports = {ID: 'id', SECRET: 'secret'};`

### Installing Dependencies

From within the root directory:

```sh
brew install node
npm install -g webpack
npm install
```

### Starting MySQL server

```sh
mysql.server start
```

### Starting server locally

```
npm start
```

## Team

  - __Product Owners__: Muhammad Naqvi, Reina Mei
  - __Scrum Master__: Ashwin Ravi

## Current Build Health  [![Build Status](https://travis-ci.org/VictoriousResistance/iDioma.svg?branch=master)](https://travis-ci.org/VictoriousResistance/iDioma)
View the build [history](https://travis-ci.org/VictoriousResistance/iDioma/builds) 

## Roadmap

View the project roadmap [here](https://waffle.io/VictoriousResistance/iDioma)
[![Stories in 'Backlog'](https://badge.waffle.io/VictoriousResistance/iDioma.svg?label=Backlog&title=Backlog)](http://waffle.io/VictoriousResistance/iDioma)
[![Stories in 'Ready'](https://badge.waffle.io/VictoriousResistance/iDioma.svg?label=Ready&title=Ready)](http://waffle.io/VictoriousResistance/iDioma)
[![Stories in 'In Progress'](https://badge.waffle.io/VictoriousResistance/iDioma.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/VictoriousResistance/iDioma)


