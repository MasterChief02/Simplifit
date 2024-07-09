INSERT into user_cred (username, password) values ('data', 'admin');
INSERT into user_cred (username, password) values ('vinod', 'kumar');
INSERT into user_cred (username, password) values ('john@123', 'admin');
INSERT into user_cred (username, password) values ('jane@123', 'jane');
INSERT into user_cred (username, password) values ('alex@123', 'alex');

INSERT INTO user_info (id,referred_by, coach, date, gender, name, mobile, age, height, initial_weight, initial_bmi, initial_body_age, initial_body_fat, initial_trunk_fat, initial_whole_body_muscle, initial_visceral_fat)
VALUES
(1,'Dr. Smith', 'John Doe', '2024-01-15', 'M', 'John Smith', '1234567890', 35, 175.5, 85.0, 27.6, 30, 22.5, 25.0, 35.0, 12.0),
(2,'Dr. Patel', 'Jane Doe', '2024-02-20', 'F', 'Jane Patel', '9876543210', 28, 162.0, 62.0, 23.7, 25, 18.0, 20.0, 30.0, 10.0),
(3,'Self', NULL, '2024-03-10', 'Others', 'Alex', '9988776655', 45, 180.0, 95.5, 29.5, 40, 28.0, 30.0, 40.0, 15.0);


INSERT INTO health_metrics (user_id, date, weight, body_fat_percentage, visceral_fat_percentage, rm_kcal, bmi, body_age, whole_body_sf, whole_body_skm, trunk_sf, trunk_skm, arms_sf, arms_skm, legs_sf, legs_skm)
VALUES
(1, '2024-05-01', 82.0, 18.5, 10.0, 800.0, 25.5, 32, 20.0, 35.0, 15.0, 20.0, 10.0, 15.0, 12.0, 18.0),
(2, '2024-05-02', 60.5, 22.0, 12.5, 500.0, 22.5, 28, 18.0, 32.0, 12.0, 18.0, 8.0, 12.0, 10.0, 15.0),
(3, '2024-05-03', 95.0, 25.0, 15.0, 400.0, 29.0, 40, 22.0, 38.0, 18.0, 24.0, 14.0, 18.0, 14.0, 20.0);


INSERT INTO personal_evaluation (user_id, favorite_snacks, breakfast, daily_water, veg_non_veg, lunch, eating_out, walk_exercise, dinner, surgery, stress, cravings, coffee_tea_soda, medication_for_what)
VALUES
(1, 'Chocolates, Fruits', 'Oatmeal, Fruits', '2 liters', 'Non-Veg', 'Salad, Grilled Chicken', 'Occasionally', 'Daily walk', 'Home-cooked', 'No', 'Moderate', 'Sweet cravings', 'Occasional coffee', NULL),
(2, 'Popcorn, Nuts', 'Whole grain bread, Eggs', '1.5 liters', 'Vegetarian', 'Vegetables, Lentils', 'Rarely', 'Gym workouts', 'Light meals', 'No', 'High', 'Salty snacks', 'Daily tea', NULL),
(3, 'Cookies, Nuts', 'Cereal with milk', '3 liters', 'Non-Veg', 'Rice, Fish curry', 'Frequently', 'Jogging', 'Regular meals', 'No', 'Low', 'Sweet cravings', 'Occasional soda', NULL);


INSERT INTO body_measurements (user_id, date, neck, chest, trunk, waist, hips, arms_upper, arms_lower)
VALUES
(1, '2024-05-01', 38.5, 102.0, 92.0, 85.5, 100.0, 32.0, 28.0),
(2, '2024-05-02', 35.0, 90.0, 80.0, 75.0, 95.0, 30.0, 26.0),
(3, '2024-05-03', 40.0, 110.0, 100.0, 95.0, 105.0, 34.0, 30.0);


INSERT INTO tracker_data (user_id , Date, steps, calories, water_intake)
VALUES (1, '2024-07-01', 5000, 2000, 2.5),
       (1, '2024-07-02', 6500, 2200, 3.0),
       (2, '2024-07-01', 7000, 1800, 2.0),
       (2, '2024-07-02', 8000, 1900, 2.7);