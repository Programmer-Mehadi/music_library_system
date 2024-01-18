import validateRequest from '@src/app/middlewares/validateRequets'
import ArtistsController from '@src/app/modules/artists/artists.controller'
import ArtistsValidation from '@src/app/modules/artists/artists.validation'
import express from 'express'

const router = express.Router()

// create artists
router.post(
  '/',
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
