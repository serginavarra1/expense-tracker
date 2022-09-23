CREATE DATABASE expenses;

CREATE TABLE users (
    u_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    username VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE expenses (
    e_id SERIAL PRIMARY KEY,
    u_id INTEGER NOT NULL,
    date VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    comment VARCHAR(100),
    amount INTEGER NOT NULL,
    FOREIGN KEY (u_id) REFERENCES users(u_id)
);

--test

INSERT INTO users (email, username, password) VALUES ('sergi', 'sergi', 'sergi');

INSERT INTO expenses (u_id, date, category, amount) VALUES (1, '10/10', 'food', 120);