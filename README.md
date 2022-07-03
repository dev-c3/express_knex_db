### This File goes through the basics of [knexJS](https://knexjs.org/guide/) which includes but is not limited to,

- File structure
- Connecting knex to databases
- Basic Schema for rudementory database tables
- 
- 

#### Connecting to databases using the knexfile
All important information about the databases are stored within the knexfile.js inside of the db folder.

db.js file exports the db object as the currently selected database environment, in this project the file does not support different environments soley development, but you can flesh this out in the future.

#### Creating schemas

We created a migrations folder that contains all the schemas in the order of the file creation.

In the CLI we would use the command ```npx knex migrate:make (name)``` to create a new file inside of the migrations folder. Be sure to have the command line accessing the db folder and NOT thhe migrations folder.

USE ```npm run migrate ``` TO ACCESS THE SCRIPT TO MIGRATE THE DESIGNATED TABLE SCHEMAS INTO THE DATABASE.


#### Data Access Objects VS Services VS Controller

The Data Access Object is directly interacting with the database, while the service is feeding the information into the Data access object without touching the database, think of the DATA ACCESS OBJECT as the structure for implementing data into the database what information gets added into the designated tables, what information gets removed.

##### VERY IMPORTANT!!!!

1. DAO USES SQL TO MANIPULATE DATABASE

2. SERVICE FEEDS INFO INTO THE DAO

3. CONTROLLER GRABS INFO FROM DATA SENT TO THE API AND DETERMINES WHICH FUNCTION TO USE FROM THE SERVICE.

#### Express API and Routing!

In the main index.js file at the core of the project, we've set up an express server which splits up the application into different routes, when navigating through the ./routes/user/index.js file we cab see how the router grabs the neccessary functions from the userController and implements them to each route and method.



### THAT BASICALLY COVERS THE API FOR THIS BASIC DATABASE INTEGRATION.