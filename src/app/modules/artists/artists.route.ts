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
router.get('/', ArtistsController.getAllArtists)

// get single artist
router.get(
  '/:id',
  validateRequest(ArtistsValidation.ArtistsGetSingleParamsSchema, {
    type: 'params',
  }),
  ArtistsController.getSingleArtist,
)

const ArtistsRoutes = router

export default ArtistsRoutes
