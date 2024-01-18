/* eslint-disable @typescript-eslint/no-explicit-any */
import { IARTIST } from '@src/app/modules/artists/artists.type'
import query from '@src/helpers/mysqlQuery'

// create artists
const createArtistsToDB = (data: IARTIST) => {
  const result = query({
    sql: `INSERT INTO artists (name) VALUES ('${data.name}')`,
  })
  return result
}

// get all artists
const getAllArtistsFromDB = async () => {
  const result = await query({
    sql: `SELECT * FROM artists`,
  })
  return result
}

// get single artist
const getSingleArtistFromDB = async (id: string) => {
  const result: any = await query({
    sql: `SELECT * FROM artists WHERE id = ${id}`,
  })
  if (result.length === 0) {
    return result
  }
  const artist = result[0]
  const albums: any = await query({
    sql: `SELECT * FROM albums WHERE id IN (SELECT album_id FROM albums_artists WHERE artist_id = ${artist.id})`,
  })

  const albumsWithSongs = await Promise.all(
    albums.map(async (album: any) => {
      const songs = await query({
        sql: `SELECT * FROM songs WHERE album_id = ${album.id}`,
      })
      return {
        ...album,
        songs,
      }
    }),
  )

  result[0].albums = albumsWithSongs

  return result
}

const ArtistsService = {
  createArtistsToDB,
  getAllArtistsFromDB,
  getSingleArtistFromDB,
}

export default ArtistsService
