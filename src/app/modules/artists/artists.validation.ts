import Joi from 'joi'

const ArtistsCreateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
})
const ArtistsUpdateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
})

const ArtistsGetSingleParamsSchema = Joi.object({
  id: Joi.string().required().min(1),
})
const ArtistsDeleteParamsSchema = Joi.object({
  id: Joi.string().required().min(1),
})
const ArtistsUpdateParamsSchema = Joi.object({
  id: Joi.string().required().min(1),
})
const ArtistsSearchQuerySchema = Joi.object({
  name: Joi.string(),
})
const ArtistsValidation = {
  ArtistsCreateBodySchema,
  ArtistsGetSingleParamsSchema,
  ArtistsDeleteParamsSchema,
  ArtistsUpdateParamsSchema,
  ArtistsUpdateBodySchema,
  ArtistsSearchQuerySchema,
}

export default ArtistsValidation
