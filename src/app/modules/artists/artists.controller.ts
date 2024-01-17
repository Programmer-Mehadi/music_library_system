/* eslint-disable @typescript-eslint/no-unused-vars */
import ArtistsService from '@src/app/modules/artists/artists.service'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'

// create artists
const createArtists = catchAsync(async (req, res, next) => {
  try {
    const result = await ArtistsService.createArtistsToDB(req.body)
    sendResponse({
      res,
      success: result ? true : false,
      message: result ? 'Artists created successfully' : 'Artists not created',
      data: {
        data: result || null,
      },
      code: 200,
    })
  } catch (err) {
    next(err)
  }
})

// get all artists
const getAllArtists = catchAsync(async (req, res, next) => {
  const result = await ArtistsService.getAllArtistsFromDB()
  sendResponse({
    res,
    success: result ? true : false,
    message: result ? 'Artists found successfully' : 'Artists not found',
    data: {
      data: result || [],
    },
    code: 200,
  })
})

const ArtistsController = { createArtists, getAllArtists }

export default ArtistsController
