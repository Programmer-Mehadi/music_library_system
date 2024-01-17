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

const AlbumValidation = {
  albumCreateBodySchema,
  artistsAssignAlbumBodySchema,
}

export default AlbumValidation
