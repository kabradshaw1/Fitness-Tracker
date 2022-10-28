# Fitness Tracker Group Project 2

## Installation Instructions

In the cmd type in the following commands:

npm init -y

npm i connect-session-sequelize dotenv express-handlebars mysql2 express-session bcrypt sequelize

mysql -u <username> -p
* Put in your password

In the MySQL command line type:
source db/schema.sql

create a new file named .env in the root directory.  The folder should contain these variables, with the user name an password filled in for MySQL:
DB_NAME='fitness_tracker_db'
DB_USER=''
DB_PW=''

To seed the database type into the cmd:
npm run seeds

To run the server type into cmd:
npm start