-- most_visited_cities
SELECT properties.city, count(reservations) as total_reservations
FROM reservations
JOIN properties ON property_id = properties.id
GROUP BY properties.city
ORDER BY total_reservations DESC;




-- this will just get the number of properties in a given city, not the number of reservations in that city
-- SELECT  city, count(city) as total_reservations
-- FROM properties
-- GROUP BY city
-- ORDER BY total_reservations DESC;