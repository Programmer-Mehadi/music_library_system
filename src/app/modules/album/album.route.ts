import validateRequest from '@src/app/middlewares/validateRequets'
import AlbumController from '@src/app/modules/album/album.controller'
import AlbumValidation from '@src/app/modules/album/album.validation'
import express from 'express'

const router = express.Router()

// create album
router.post(
  '/',
  validateRequest(AlbumValidation.albumCreateBodySchema, { type: 'body' }),
  AlbumController.createAlbum,
)

// get all album
router.get('/', AlbumController.getAllAlbums)

const AlbumRoutes = router

export default AlbumRoutes
