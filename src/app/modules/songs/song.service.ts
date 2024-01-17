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

const getSingleSongFromDB = (id: number) => {
  const result = query({
    sql: `SELECT * FROM songs WHERE id = ${id}`,
  })
  return result
}

const SongService = {
  createSongToDB,
  getAllSongFromDB,
  deleteSongFromDB,
  updateSongFromDB,
  getSingleSongFromDB,
}

export default SongService
