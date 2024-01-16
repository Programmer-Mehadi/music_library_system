import Joi from 'joi'

const albumCreateBodySchema = Joi.object({
  title: Joi.string().required().min(3).max(120),
  release_year: Joi.date().required(),
  genre: Joi.string().required().min(3).max(120),
})

const AlbumValidation = {
  albumCreateBodySchema,
}

export default AlbumValidation
