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
const SongService = {
  createSongToDB,
  getAllSongFromDB,
}

export default SongService
