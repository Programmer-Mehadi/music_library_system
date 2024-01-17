/* eslint-disable @typescript-eslint/no-explicit-any */
import AlbumService from '@src/app/modules/album/album.service'
import CustomError from '@src/errors/CustomError'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'
import { Request } from 'express'

// create album
const createAlbum = catchAsync(async (req, res, next) => {
  try {
    const result = await AlbumService.createAlbumToDB(req.body)
    sendResponse({
      res,
      success: result ? true : false,
      message: result ? 'Album created successfully' : 'Album not created',
      data: {
        data: result || null,
      },
      code: 200,
    })
  } catch (err) {
    next(err)
  }
})

// get all album
const getAllAlbums = catchAsync(async (req, res, next) => {
  try {
    const result = await AlbumService.getAllAlbumsFromDB()
    sendResponse({
      res,
      success: result ? true : false,
      message: result ? 'Albums fetched successfully' : 'Not Albums found',
      data: {
        data: result || [],
      },
      code: 200,
    })
  } catch (err) {
    next(err)
  }
})
// assign artist to the album
const assignArtistToAlbum = catchAsync(async (req: Request, res, next) => {
  try {
    const result = await AlbumService.assignArtistToAlbum(
      req.body.albumId,
      req.body.artistId,
    )
    sendResponse({
      res,
      success: result ? true : false,
      message: result
        ? 'Artist assigned successfully'
        : 'Artist alrady assigned or can not assigned',
      data: {
        data: result || null,
      },
      code: 200,
    })
  } catch (error: any) {
    if (error?.code == 'ER_NO_REFERENCED_ROW_2') {
      return next(
        new CustomError(
          `${error?.message?.split('REFERENCES')[1]?.split('`')[1]} not found`,
          404,
          null,
          'ReferenceError',
        ),
      )
    }
    next(error)
  }
})

const AlbumController = { createAlbum, getAllAlbums, assignArtistToAlbum }

export default AlbumController