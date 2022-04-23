# LightBnB

LightBnB is a web app that we built to practice making database queries.


## Final Product
![01 - Page showing a user who has logged in](https://user-images.githubusercontent.com/41748727/164865584-4341dd32-63ae-4a90-8617-794b84fc7e02.png)
![02 - Search for properties by filtering query](https://user-images.githubusercontent.com/41748727/164865586-60d75a91-c8f0-4471-a892-19f76bdeb977.png)
![03 - Create new listings](https://user-images.githubusercontent.com/41748727/164865587-bfe0f75a-3bb5-4e7a-b883-89bd79253474.png)
![04 - ERD - Entity Relationship Diagram - LightBnB](https://user-images.githubusercontent.com/41748727/164865589-9406f24c-fc97-4330-85f6-2b5c41f33df1.png)

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
