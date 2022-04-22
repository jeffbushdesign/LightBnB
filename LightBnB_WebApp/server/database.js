const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

// the following assumes that you named your connection variable `pool`
// pool.query(`SELECT title FROM properties LIMIT 10;`).then(response => {console.log(response)})


const properties = require('./json/properties.json');
const users = require('./json/users.json');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const queryString = `
        SELECT *
        FROM users
        WHERE email = $1;`;
  return pool
      .query(queryString, [email.toLowerCase()])
      .then(result => result.rows[0])

  // Old code
  // let user;
  // for (const userId in users) {
  //   user = users[userId];
  //   if (user.email.toLowerCase() === email.toLowerCase()) {
  //     break;
  //   } else {
  //     user = null;
  //   }
  // }
  // return Promise.resolve(user);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const queryString = `
        SELECT * FROM users
        WHERE id = $1;`;
  return pool.query(queryString, [id]).then(res => res.rows[0]);
  
  // Old code
  // return Promise.resolve(users[id]);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const queryString = `
        INSERT INTO users 
            (name, password, email)
        VALUES
            ($1, $2, $3)
        RETURNING *;`
  return pool.query(queryString,
      [user.name, user.password, user.email.toLowerCase()])
      .then(res => res.rows[0]);

  // Old code
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
 const getAllReservations = function (guest_id, limit = 10) {
  console.log('Database query testing');
  const queryString = `
      SELECT
          properties.*,
          reservations.*,
          avg(property_reviews.rating) AS average_rating
      FROM property_reviews
      JOIN reservations ON reservations.property_id = property_reviews.property_id
      JOIN properties ON properties.id = reservations.property_id
      WHERE 
          reservations.guest_id = $1 AND
          reservations.end_date < now()::date
      GROUP BY reservations.id, properties.id
      ORDER BY reservations.start_date
      LIMIT $2;
  `;
  return pool.query(queryString, [guest_id, limit]).then(res => res.rows);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;
  
  // console.log('Beginning of query', queryParams);
  // 3
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    queryString += `AND owner_id = $${queryParams.length} `;
  }

  if (options.minimum_price_per_night && options.maximum_price_per_night) {
    queryParams.push(`${options.minimum_price_per_night*100}`);
    queryParams.push(`${options.maximum_price_per_night*100}`);
    queryString += `AND cost_per_night >= $${queryParams.length - 1} AND cost_per_night <= $${queryParams.length} `;
  }

  

  console.log('options.owner_id',options.owner_id);
  console.log(queryString, options);
  // console.log('Options:', options);
  // console.log('Right before return', queryParams);
  
  // 4
  queryParams.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;
  
  // 5

  // 6
  return pool.query(queryString, queryParams).then((res) => res.rows);
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
