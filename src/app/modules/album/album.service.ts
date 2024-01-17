/* eslint-disable @typescript-eslint/no-explicit-any */
import { IALBUM } from '@src/app/modules/album/album.type'
import query from '@src/helpers/mysqlQuery'

// create album
const createAlbumToDB = async (data: IALBUM) => {
  const result = await query({
    sql: `INSERT INTO albums (title, release_year, genre) VALUES ('${data.title}', '${data.release_year}', '${data.genre}')`,
  })
  return result
}

// get all album
const getAllAlbumsFromDB = async () => {
  const result: any = await query({
    sql: `
      SELECT 
        albums.id,
        albums.title,
        albums.release_year,
        albums.genre
      FROM 
        albums 
    `,
  })

  const artists = await Promise.all(
    result.map(async (album: any) => {
      const artists = await query({
        sql: `
        SELECT albums_artists.album_id, albums_artists.artist_id, artists.id AS artist_id, artists.name AS artist_name FROM albums Join albums_artists ON albums.id = albums_artists.album_id Join artists ON albums_artists.artist_id = artists.id WHERE albums.id = ${album.id};
        `,
      })
      return {
        ...album,
        artists,
      }
    }),
  )

  return artists
}

// assign artist to the album
const assignArtistToAlbum = async (albumId: number, artistId: number) => {
  const sqlQuery = `SELECT * FROM albums_artists WHERE album_id = ${albumId} AND artist_id = ${artistId}`
  const findResult: any = await query({
    sql: sqlQuery,
  })
  if (findResult.length > 0) return null
  const result = await query({
    sql: `INSERT INTO albums_artists (album_id, artist_id) VALUES (${albumId}, ${artistId})`,
  })
  return result
}

const AlbumService = {
  createAlbumToDB,
  getAllAlbumsFromDB,
  assignArtistToAlbum,
}

export default AlbumService
