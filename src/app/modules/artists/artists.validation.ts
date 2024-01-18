import Joi from 'joi'

const ArtistsCreateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
})

const ArtistsGetSingleParamsSchema = Joi.object({
  id: Joi.string().required().min(1),
})
const ArtistsValidation = {
  ArtistsCreateBodySchema,
  ArtistsGetSingleParamsSchema,
}

export default ArtistsValidation
