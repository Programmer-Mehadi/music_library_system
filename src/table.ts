/* 
==== create user  table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  ) 
*/

/* 
==== create album table
CREATE TABLE albums (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    release_year DATE NOT NULL,
    genre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)
*/

/* 
==== create artist table
CREATE TABLE artists (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)
*/

/*
==== create song table
CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    album_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE RESTRICT
)
*/

/*
==== create albums_artist table
CREATE TABLE albums_artists (
    id INT NOT NULL AUTO_INCREMENT,
    album_id INT NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE,
    FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE
)
*/
