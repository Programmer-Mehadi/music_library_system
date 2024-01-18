import Joi from 'joi'

const albumCreateBodySchema = Joi.object({
  title: Joi.string().required().min(3).max(120),
  release_year: Joi.date().required(),
  genre: Joi.string().required().min(3).max(120),
})

const artistsAssignAlbumBodySchema = Joi.object({
  albumId: Joi.number().required().min(1),
  artistId: Joi.number().required().min(1),
})
const deleteAlbumParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const updateAlbumParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})
const updateAlbumBodySchema = Joi.object({
  title: Joi.string().min(3).max(120),
  release_year: Joi.date(),
  genre: Joi.string().min(3).max(120),
})

const getSingleAlbumParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const assignUpdateAlbumBodySchema = Joi.object({
  albumId: Joi.number().required().min(1),
  artistId: Joi.number().required().min(1),
})
const assignUpdateAlbumParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const AlbumValidation = {
  albumCreateBodySchema,
  artistsAssignAlbumBodySchema,
  deleteAlbumParamsSchema,
  updateAlbumBodySchema,
  updateAlbumParamsSchema,
  getSingleAlbumParamsSchema,
  assignUpdateAlbumBodySchema,
  assignUpdateAlbumParamsSchema,
}

export default AlbumValidation
