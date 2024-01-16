import AlbumService from '@src/app/modules/album/album.service'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'

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
      message: result ? 'Albums fetched successfully' : 'Albums not fetched',
      data: {
        data: result || [],
      },
      code: 200,
    })
  } catch (err) {
    next(err)
  }
})
//
const AlbumController = { createAlbum, getAllAlbums }

export default AlbumController
