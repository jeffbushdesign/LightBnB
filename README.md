# LightBnB

LightBnB is a web app built to practice database design and using server-side Javascript to display information from queries to a webpage.

Built with:

- Node postgres library
- Express
- PostgreSQL database

## Screenshots
| ![User logged in](https://user-images.githubusercontent.com/41748727/164865584-4341dd32-63ae-4a90-8617-794b84fc7e02.png) |
:--:
| _User logged in_ |

| ![ERD - Entity Relationship Diagram](https://user-images.githubusercontent.com/41748727/164865589-9406f24c-fc97-4330-85f6-2b5c41f33df1.png) |
:--:
| _Entity Relationship Diagram_ |

## Getting Started
### Start the server:
In terminal:
```
cd LightBnB/LightBnB_WebApp
npm run local
```

In your web browser visit http://localhost:3000/

### Using PostgreSQL to query the database:
In terminal:
```
cd LightBnB
psql lightbnb
```
Example query:
Ask psql to show the email addresses of all users:
```
SELECT email FROM users;
```
```
            email              
---------------------------------
 tristanjacobs@gmail.com
 allisonjackson@mail.com
 asherpoole@gmx.com
 michaelgray@mail.com
 ...
 ```
 
 ## Dependencies

- bcrypt
- body-parser
- cookie-session
- express
- nodemon
- pg



