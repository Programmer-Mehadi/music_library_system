import auth from '@src/app/middlewares/auth'
import validateRequest from '@src/app/middlewares/validateRequets'
import SongController from '@src/app/modules/songs/song.controller'
import SongValidation from '@src/app/modules/songs/song.validation'
import { ENUM_USER_ROLE } from '@src/enums/role'
import express from 'express'

const router = express.Router()

// create song
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(SongValidation.createSongBodySchema, { type: 'body' }),
  SongController.createSong,
)

// get all song
router.get('/', SongController.getAllSong)

// delete song
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(SongValidation.deleteSongParamsSchema, { type: 'params' }),
  SongController.deleteSong,
)

// update song
router.put(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
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
router.get(
  '/by-album/:albumId',
  validateRequest(SongValidation.getAllSongsByAlbumParamsSchema, {
    type: 'params',
  }),
  SongController.getSongsByAlbum,
)

// get songs by artists
router.get(
  '/by-artists/:artistId',
  validateRequest(SongValidation.getAllSongsByArtistsParamsSchema, {
    type: 'params',
  }),
  SongController.getSongsByArtists,
)

const SongRoutes = router

export default SongRoutes
