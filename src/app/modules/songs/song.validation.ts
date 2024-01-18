import Joi from 'joi'

const createSongBodySchema = Joi.object({
  title: Joi.string().required().min(3).max(250),
  duration: Joi.number().required(),
  album_id: Joi.number().required().min(1),
})

const deleteSongParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const updateSongParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})
const updateSongBodySchema = Joi.object({
  title: Joi.string().min(3).max(250),
  duration: Joi.number(),
  album_id: Joi.number().min(1),
})

const getSingleSongParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const getAllSongsByAlbumParamsSchema = Joi.object({
  albumId: Joi.number().required().min(1),
})
const getAllSongsByArtistsParamsSchema = Joi.object({
  albumId: Joi.number().required().min(1),
})

const SongValidation = {
  createSongBodySchema,
  deleteSongParamsSchema,
  updateSongParamsSchema,
  getSingleSongParamsSchema,
  updateSongBodySchema,
  getAllSongsByAlbumParamsSchema,
  getAllSongsByArtistsParamsSchema,
}

export default SongValidation
