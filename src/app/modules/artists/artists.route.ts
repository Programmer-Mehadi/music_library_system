import auth from '@src/app/middlewares/auth'
import validateRequest from '@src/app/middlewares/validateRequets'
import ArtistsController from '@src/app/modules/artists/artists.controller'
import ArtistsValidation from '@src/app/modules/artists/artists.validation'
import { ENUM_USER_ROLE } from '@src/enums/role'
import express from 'express'

const router = express.Router()

// create artists
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(ArtistsValidation.ArtistsCreateBodySchema, { type: 'body' }),
  ArtistsController.createArtists,
)

// get all artists
router.get(
  '/',
  validateRequest(ArtistsValidation.ArtistsSearchQuerySchema, {
    type: 'query',
  }),
  ArtistsController.getAllArtists,
)

// get single artist
router.get(
  '/:id',
  validateRequest(ArtistsValidation.ArtistsGetSingleParamsSchema, {
    type: 'params',
  }),
  ArtistsController.getSingleArtist,
)

// delete artists
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(ArtistsValidation.ArtistsDeleteParamsSchema, {
    type: 'params',
  }),
  ArtistsController.deleteArtists,
)

// update artists
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(ArtistsValidation.ArtistsUpdateParamsSchema, {
    type: 'params',
  }),
  validateRequest(ArtistsValidation.ArtistsUpdateBodySchema, { type: 'body' }),
  ArtistsController.updateArtists,
)

const ArtistsRoutes = router

export default ArtistsRoutes
