import Joi from 'joi'

const ArtistsCreateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
})

const ArtistsValidation = {
  ArtistsCreateBodySchema,
}

export default ArtistsValidation
