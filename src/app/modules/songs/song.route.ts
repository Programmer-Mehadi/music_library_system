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

// update song
router.put(
  '/:id',
  validateRequest(SongValidation.updateSongParamsSchema, { type: 'params' }),
  validateRequest(SongValidation.updateSongBodySchema, { type: 'body' }),
  SongController.updateSong,
)

// get single song
router.get(
  '/:id',
  validateRequest(SongValidation.getSingleSongParamsSchema, {
    type: 'params',
  }),
  SongController.getSingleSong,
)

// get songs by album
router.get('/by-album/:albumId', SongController.getSongsByAlbum)

// get songs by artists
router.get('/by-artists/:artistId', SongController.getSongsByArtists)

const SongRoutes = router

export default SongRoutes
