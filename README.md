# E-Commerce Back-End

[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)]()

# Description

This is a back-end app that utilizes a database and multiple tables that interact via API routes. It allows the user to search categories, products, and tags. It also allows the user to search, update and delete categories, products, and tags by ID.

## Screenshots of the app

![E-Commerce Back-End](./assets/demo-screenshot.jpg)

## Demo of the app

(Click on the image below to be redirected to the Youtube demo video)

[![E-Commerce Back-End Demo](./assets/demo-screenshot.jpg)](https://youtu.be/2fE65vyScys)


# Table of Contents

* [Installation](#installation)
    
* [Usage](#usage)

* [Technology](#technology)

* [License](#license)

* [Contributors](#contributors)

* [Questions](#questions)

# Installation

To run the app you will need to follow the next few steps:

* Open VS Code
* Open the schema file in the folder ** ./db/schema.sql and copy the content in the file
* Open MySQLWorkbench
* Paste the content you copied from the schema file to create the DB
* Go to the root of the folder and type to seed the tables you created on MYSQLWorkbench

```
npm run seed
```
Once you verify the tables have been seeded run the following command in the root of the project so you access the server
```
node server.js
```

# Usage

It allows the user to search categories, products and tag. It also allows the user to seach, update and delete categories, products and tags by ID.

# Technology

* MySQL 2
* Sequelize
* Express
* Node Js
* Postman

# License 

This project is governed by: MIT License

# Contributors

Blenda Orellana

# Questions

If you have any questions about the repo or the app please feel free to contact me
 * Email: blen.or90@gmail.com
 * Github: https://github.com/blen90
