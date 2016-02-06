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
insert into users values (1, 'greg');
insert into rooms values (1, 'loblob');
insert into messages values (1, 'hello!', null, 1, 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

