import auth from '@src/app/middlewares/auth'
import validateRequest from '@src/app/middlewares/validateRequets'
import AlbumController from '@src/app/modules/album/album.controller'
import AlbumValidation from '@src/app/modules/album/album.validation'
import { ENUM_USER_ROLE } from '@src/enums/role'
import express from 'express'

const router = express.Router()

// create album
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(AlbumValidation.albumCreateBodySchema, { type: 'body' }),
  AlbumController.createAlbum,
)

// get all album
router.get('/', AlbumController.getAllAlbums)

// get single album
router.get(
  '/:id',
  validateRequest(AlbumValidation.getSingleAlbumParamsSchema, {
    type: 'params',
  }),
  AlbumController.getSingleAlbum,
)

// assign album to the artist
router.post(
  '/assign-artist',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(AlbumValidation.artistsAssignAlbumBodySchema, {
    type: 'body',
  }),
  AlbumController.assignArtistToAlbum,
)

// delete album
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(AlbumValidation.deleteAlbumParamsSchema, { type: 'params' }),
  AlbumController.deleteAlbum,
)
// update album
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(AlbumValidation.updateAlbumParamsSchema, { type: 'params' }),
  validateRequest(AlbumValidation.updateAlbumBodySchema, { type: 'body' }),
  AlbumController.updateAlbum,
)

const AlbumRoutes = router

export default AlbumRoutes
