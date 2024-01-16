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
  const result = await query({
    sql: `SELECT * FROM albums`,
  })
  return result
}
const AlbumService = { createAlbumToDB, getAllAlbumsFromDB }

export default AlbumService
