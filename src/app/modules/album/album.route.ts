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

// assign album to the artist
router.post(
  '/assign-artist',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(AlbumValidation.artistsAssignAlbumBodySchema, {
    type: 'body',
  }),
  AlbumController.assignArtistToAlbum,
)

const AlbumRoutes = router

export default AlbumRoutes
