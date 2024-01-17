import Joi from 'joi'

const createSongBodySchema = Joi.object({
  title: Joi.string().required().min(3).max(250),
  duration: Joi.number().required(),
  album_id: Joi.number().required().min(1),
})

const deleteSongParamsSchema = Joi.object({
  id: Joi.number().required().min(1),
})

const SongValidation = { createSongBodySchema, deleteSongParamsSchema }

export default SongValidation
