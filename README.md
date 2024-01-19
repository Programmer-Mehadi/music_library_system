<h2>MUSIC LIBRARAY SYSTEM</h2>

<h3>Steps for installation:</h3>

- clone the repository
- open terminal the project directory
- type `yarn install` and enter
- open xampp and import the database or (create table `music_library_system` and run 5 query for tables)
- type terminal `yarn start`
- Enjoy👍

<hr/>

<h3>All Api</h3>

<span>URL: `http://localhost:5500/api/v1`</span>

🔔 All `POST` `PATCH` `PUT` `DELETE` methos are need `authenticated`

<h4>User</h4>

- (POST) (authenticated) `/user/` => for create a new user
- (GET) `/user/` => for get all users
- (GET) `/user/:id` => for get a user
- (PATCH) (authenticated) `/user/:id` => for update a user
- (DELETE) (authenticated) `/user/:id` => for delete a user

<h4>Artists</h4>

- (POST) (authenticated) `/artist/` => for create a new artist
- (GET) `/artist/` => for get all artists
- (GET) `/artist/:id` => for get a artist
- (PATCH) (authenticated) `/artist/:id` => for update a artist
- (DELETE) (authenticated) `/artist/:id` => for delete a artist

<h4>Album</h4>

- (POST) (authenticated) `/album/` => for create a new album
- (GET) `/album/` => for get all albums
- (GET) `/album/:id` => for get a album
- (PATCH) (authenticated) `/album/:id` => for update a album
- (DELETE) (authenticated) `/album/:id` => for delete a album
- (POST) (authenticated) `/album/assign-artist` => for assign album to the artist
- (PATCH) (authenticated) `/album/assign-artist/:id` => for update assigned album to the artist

<h4>Song</h4>

- (POST) (authenticated) `/song/` => for create a new song
- (GET) `/song/` => for get all songs
- (GET) `/song/:id` => for get a song
- (PATCH) (authenticated) `/song/:id` => for update a song
- (DELETE) (authenticated) `/song/:id` => for delete a song
- (GET) `/song/by-album/:albumId` => for get songs by album
- (GET) `/song/by-artists/:artistId` => for get songs by artists

<h4>Auth</h4>

- (POST) `/auth/login` => for login
- (GET) `/auth/verify` => for verify user by token

<h3>MySQL Query</h3>

```
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
```
