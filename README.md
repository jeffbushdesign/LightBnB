# LightBnB

LightBnB is a web app that we built to practice making database queries.


## Final Product




## Getting Started

# Starting the server:
- In terminal:
  - cd LightBnB/LightBnB_WebApp
  - npm run local

- In your web browser:
  - http://localhost:3000/

# Logging in:
- Enter email address
- All users have 'password' as their password

# Using PostgreSQL to query the database:
- In terminal:
  - cd LightBnb
  - psql lightbnb
- Example query:
  - Show email addresses of all users:
    - SELECT email FROM users;
    - Result:
    - email              
---------------------------------
 renhoek@nickelodeon.com
 stimpy@nickelodeon.com
 tonyhawk@proskater.com
 tristanjacobs@gmail.com
 allisonjackson@mail.com
 asherpoole@gmx.com
 michaelgray@mail.com
 ...