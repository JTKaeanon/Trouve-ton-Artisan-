-- Create database
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

-- create artisans table
CREATE TABLE IF NOT EXISTS artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    location VARCHAR(255) NOT NULL,
    about TEXT,
    email VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    top BOOLEAN DEFAULT FALSE
);