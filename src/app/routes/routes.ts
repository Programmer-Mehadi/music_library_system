import AlbumRoutes from '@src/app/modules/album/album.route'
import ArtistsRoutes from '@src/app/modules/artists/artists.route'
import AuthRoutes from '@src/app/modules/auth/auth.route'
import SongRoutes from '@src/app/modules/songs/song.route'
import UserRoutes from '@src/app/modules/user/user.route'
import express from 'express'

const routes = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/album',
    route: AlbumRoutes,
  },
  {
    path: '/artist',
    route: ArtistsRoutes,
  },
  {
    path: '/song',
    route: SongRoutes,
  },
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))

export default routes
