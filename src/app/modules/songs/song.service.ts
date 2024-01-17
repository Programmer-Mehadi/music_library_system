import { ISONG } from '@src/app/modules/songs/song.type'
import query from '@src/helpers/mysqlQuery'

const createSongToDB = (data: ISONG) => {
  const result = query({
    sql: `INSERT INTO songs (title, duration, album_id) VALUES ('${data.title}', '${data.duration}', '${data.album_id}')`,
  })
  return result
}

const SongService = {
  createSongToDB,
}

export default SongService
