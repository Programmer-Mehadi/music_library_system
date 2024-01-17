import validateRequest from '@src/app/middlewares/validateRequets'
import SongController from '@src/app/modules/songs/song.controller'
import SongValidation from '@src/app/modules/songs/song.validation'
import express from 'express'

const router = express.Router()

// create song
router.post(
  '/',
  validateRequest(SongValidation.createSongBodySchema, { type: 'body' }),
  SongController.createSong,
)

// get all song
router.get('/', SongController.getAllSong)

// delete song
router.delete(
  '/:id',
  validateRequest(SongValidation.deleteSongParamsSchema, { type: 'params' }),
  SongController.deleteSong,
)

const SongRoutes = router

export default SongRoutes
