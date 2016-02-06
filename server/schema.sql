CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL
);

CREATE TABLE rooms (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(40) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text varchar(255) NOT NULL,
  time varchar(60),
  user_id INTEGER,
  room_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)  
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* // example off w3schools
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (P_Id)
)
*/