
CREATE DATABASE wellness_evaluation;


USE wellness_evaluation;


DROP TABLE IF EXISTS body_measurements;
DROP TABLE IF EXISTS health_metrics;
DROP TABLE IF EXISTS personal_evaluation;
DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS user_cred;
DROP TABLE IF EXISTS tracker_data;



CREATE TABLE user_cred (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Create the user_info table
CREATE TABLE user_info (
    i INT AUTO_INCREMENT PRIMARY Key,  -- Unique identifier for each user
    -- Foreign key (id) references user_cred(id),
    id int unique,
    referred_by VARCHAR(100),
    coach VARCHAR(100),
    date DATE NOT NULL,
    gender ENUM('M', 'F', 'Others') NOT NULL,
    name VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) NOT NULL UNIQUE,  -- Ensures mobile numbers are unique
    age INT NOT NULL CHECK (age > 0),  -- Ensures age is a positive number
    height DECIMAL(5, 2) NOT NULL CHECK (height > 0),  -- Ensures height is a positive number
    initial_weight DECIMAL(5, 2) NOT NULL CHECK (initial_weight > 0),  -- Ensures initial weight is a positive number
    initial_bmi DECIMAL(5, 2) NOT NULL CHECK (initial_bmi > 0),  -- Ensures initial BMI is a positive number
    initial_body_age INT NOT NULL CHECK (initial_body_age > 0),  -- Ensures initial body age is a positive number
    initial_body_fat DECIMAL(5, 2) NOT NULL CHECK (initial_body_fat >= 0 AND initial_body_fat <= 100),  -- Ensures initial body fat percentage is between 0 and 100
    initial_trunk_fat DECIMAL(5, 2) NOT NULL CHECK (initial_trunk_fat >= 0 AND initial_trunk_fat <= 100),  -- Ensures initial trunk fat percentage is between 0 and 100
    initial_whole_body_muscle DECIMAL(5, 2) NOT NULL CHECK (initial_whole_body_muscle >= 0),  -- Ensures initial whole body muscle is a non-negative number
    initial_visceral_fat DECIMAL(5, 2) NOT NULL CHECK (initial_visceral_fat >= 0 AND initial_visceral_fat <= 100),  -- Ensures initial visceral fat percentage is between 0 and 100
    CONSTRAINT valid_mobile CHECK (mobile REGEXP '^[0-9]{10,15}$'),  -- Ensures valid phone number (10-15 digits)
    Foreign Key (id) REFERENCES user_cred(id)
);

-- Create the health_metrics table
CREATE TABLE health_metrics (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique identifier for each health metric record
    user_id INT NOT NULL,
    date DATE NOT NULL,
    weight DECIMAL(5, 2) NOT NULL CHECK (weight > 0),  -- Ensures weight is a positive number
    body_fat_percentage DECIMAL(5, 2) NOT NULL CHECK (body_fat_percentage >= 0 AND body_fat_percentage <= 100),  -- Ensures body fat percentage is between 0 and 100
    visceral_fat_percentage DECIMAL(5, 2) NOT NULL CHECK (visceral_fat_percentage >= 0 AND visceral_fat_percentage <= 100),  -- Ensures visceral fat percentage is between 0 and 100
    rm_kcal DECIMAL(5, 2) NOT NULL CHECK (rm_kcal > 0),  -- Ensures rm_kcal is a positive number
    bmi DECIMAL(5, 2) NOT NULL CHECK (bmi > 0),  -- Ensures BMI is a positive number
    body_age INT NOT NULL CHECK (body_age > 0),  -- Ensures body age is a positive number
    whole_body_sf DECIMAL(5, 2) NOT NULL CHECK (whole_body_sf >= 0),  -- Ensures whole body SF is a non-negative number
    whole_body_skm DECIMAL(5, 2) NOT NULL CHECK (whole_body_skm >= 0),  -- Ensures whole body SKM is a non-negative number
    trunk_sf DECIMAL(5, 2) NOT NULL CHECK (trunk_sf >= 0),  -- Ensures trunk SF is a non-negative number
    trunk_skm DECIMAL(5, 2) NOT NULL CHECK (trunk_skm >= 0),  -- Ensures trunk SKM is a non-negative number
    arms_sf DECIMAL(5, 2) NOT NULL CHECK (arms_sf >= 0),  -- Ensures arms SF is a non-negative number
    arms_skm DECIMAL(5, 2) NOT NULL CHECK (arms_skm >= 0),  -- Ensures arms SKM is a non-negative number
    legs_sf DECIMAL(5, 2) NOT NULL CHECK (legs_sf >= 0),  -- Ensures legs SF is a non-negative number
    legs_skm DECIMAL(5, 2) NOT NULL CHECK (legs_skm >= 0),  -- Ensures legs SKM is a non-negative number
    FOREIGN KEY (user_id) REFERENCES user_info(i) ON DELETE CASCADE  -- Foreign key referencing general_info
);

-- Create the personal_evaluation table
CREATE TABLE personal_evaluation (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique identifier for each personal evaluation record
    user_id INT NOT NULL,
    favorite_snacks VARCHAR(255),
    breakfast VARCHAR(255),
    daily_water VARCHAR(255),
    veg_non_veg VARCHAR(255),
    lunch VARCHAR(255),
    eating_out VARCHAR(255),
    walk_exercise VARCHAR(255),
    dinner VARCHAR(255),
    surgery VARCHAR(255),
    stress VARCHAR(255),
    cravings VARCHAR(255),
    coffee_tea_soda VARCHAR(255),
    bleeding_gums BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    day_time_sleeping_lazy BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    night_sleep_frequent_urination BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    dandruff_hair_fall BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    motion_problem BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    acidity_gastric BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    body_pain BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    asthma_wheezing_breathlessness BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    sneezing_dust_allergy BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    skin_problem BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    regular_medication BOOLEAN DEFAULT FALSE,  -- Sets default value to FALSE
    medication_for_what VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user_info(i) ON DELETE CASCADE  -- Foreign key referencing general_info
);

-- Create the body_measurements table
CREATE TABLE body_measurements (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique identifier for each body measurement record
    user_id INT NOT NULL,
    date DATE NOT NULL,
    neck DECIMAL(5, 2) NOT NULL CHECK (neck > 0),  -- Ensures neck measurement is a positive number
    chest DECIMAL(5, 2) NOT NULL CHECK (chest > 0),  -- Ensures chest measurement is a positive number
    trunk DECIMAL(5, 2) NOT NULL CHECK (trunk > 0),  -- Ensures trunk measurement is a positive number
    waist DECIMAL(5, 2) NOT NULL CHECK (waist > 0),  -- Ensures waist measurement is a positive number
    hips DECIMAL(5, 2) NOT NULL CHECK (hips > 0),  -- Ensures hips measurement is a positive number
    arms_upper DECIMAL(5, 2) NOT NULL CHECK (arms_upper > 0),  -- Ensures upper arms measurement is a positive number
    arms_lower DECIMAL(5, 2) NOT NULL CHECK (arms_lower > 0),  -- Ensures lower arms measurement is a positive number
    FOREIGN KEY (user_id) REFERENCES user_info(i) ON DELETE CASCADE  -- Foreign key referencing general_info
);


CREATE TABLE tracker_data (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique identifier for each tracker_data record
    user_id INT NOT NULL,
    date DATE NOT NULL,
    steps INT,
    calories INT,
    water_intake DECIMAL(5, 2),
    CONSTRAINT unique_user_date UNIQUE (user_id, date)
);