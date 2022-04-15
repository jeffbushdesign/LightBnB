INSERT INTO users (name, email, password)
VALUES ('Ren Hoek', 'renhoek@nickelodeon.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Stimpson J. Cat', 'stimpy@nickelodeon.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Tony Hawk', 'tonyhawk@proskater.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES 
(1, 'Really Nice Property', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 30000, 1, 2, 2, 'Canada', '123 Roady Road', 'Citysville', 'Quebec', 'H4D 2D5', false),
(2, 'Borderline Shitty Property', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 20000, 3, 2, 4, 'Canada', '456 Street ave.', 'Small Town', 'Quebec', 'K9S 3E9', true),
(3, 'Wow you live here? Property', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 10000, 2, 2, 1, 'Canada', '789 Circle cresent', 'Big City', 'Quebec', 'L8O 1R8', false);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES 
('2022-04-15', '2022-04-20', 1, 2),
('2022-09-15', '2022-09-25', 2, 3),
('2022-01-05', '2022-01-09', 3, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES
(1, 1, 1, 5, 'message'),
(2, 3, 2, 4, 'message'),
(3, 2, 3, 1, 'message');
