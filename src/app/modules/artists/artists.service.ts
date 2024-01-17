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
const ArtistsService = { createArtistsToDB, getAllArtistsFromDB }

export default ArtistsService
