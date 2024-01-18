/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISONG } from '@src/app/modules/songs/song.type'
import query from '@src/helpers/mysqlQuery'

// create song
const createSongToDB = (data: ISONG) => {
  const result = query({
    sql: `INSERT INTO songs (title, duration, album_id) VALUES ('${data.title}', '${data.duration}', '${data.album_id}')`,
  })
  return result
}

// get all song
const getAllSongFromDB = () => {
  const result = query({
    sql: `SELECT * FROM songs`,
  })
  return result
}

// delete song
const deleteSongFromDB = (id: number) => {
  const result = query({
    sql: `DELETE FROM songs WHERE id = ${id}`,
  })
  return result
}

// update song
const updateSongFromDB = (id: number, data: any) => {
  const makeQuery = Object.keys(data)
    .map((key: any) => {
      return `${key} = '${data[key]}'`
    })
    .join(', ')
  if (makeQuery === '') {
    throw new Error('No data to update')
  }
  const result = query({
    sql: `UPDATE songs SET ${makeQuery} WHERE id = ${id}`,
  })
  return result
}

// get single song
const getSingleSongFromDB = async (id: number) => {
  const result: any = await query({
    sql: `SELECT * FROM songs WHERE id = ${id}`,
  })
  if (result.length === 0) {
    return result
  } else {
    const data = result[0]

    const album: any = await query({
      sql: `SELECT * FROM albums WHERE id = ${data.album_id}`,
    })

    const albumArtists: any = await query({
      sql: `SELECT artists.id, artists.name FROM albums_artists JOIN artists ON artists.id = albums_artists.artist_id WHERE album_id = ${data.album_id}`,
    })

    // return res
    return [
      {
        ...data,
        album: {
          ...album[0],
          artists: albumArtists,
        },
      },
    ]
  }
}

// get song by album
const getSongsByAlbumFromDB = async (albumId: number) => {
  const album: any = await query({
    sql: `SELECT * FROM albums WHERE id = ${albumId}`,
  })

  if (album.length === 0) {
    return []
  } else {
    const result: any = await query({
      sql: `SELECT * FROM songs WHERE album_id = ${albumId}`,
    })
    return [
      {
        ...album[0],
        songs: result,
      },
    ]
  }
}

// get song by artists
const getSongsByArtistsFromDB = async (artistId: number) => {
  const artist: any = await query({
    sql: `SELECT * FROM artists WHERE id = ${artistId}`,
  })

  if (artist.length === 0) {
    return []
  }
  const result: any = await query({
    sql: `SELECT * FROM songs WHERE album_id IN (SELECT album_id FROM albums_artists WHERE artist_id = ${artistId})`,
  })
  return [
    {
      ...artist[0],
      songs: result,
    },
  ]
}

const SongService = {
  createSongToDB,
  getAllSongFromDB,
  deleteSongFromDB,
  updateSongFromDB,
  getSingleSongFromDB,
  getSongsByAlbumFromDB,
  getSongsByArtistsFromDB,
}

export default SongService
