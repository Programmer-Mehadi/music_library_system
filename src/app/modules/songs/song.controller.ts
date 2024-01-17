/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import SongService from '@src/app/modules/songs/song.service'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'

// create song
const createSong = catchAsync(async (req, res, next) => {
  try {
    const result = await SongService.createSongToDB(req.body)
    sendResponse({
      res,
      success: result ? true : false,
      message: result ? 'Song created successfully' : 'Song not created',
      data: {
        data: result || null,
      },
      code: 200,
    })
  } catch (error) {
    next(error)
  }
})

// get all song
const getAllSong = catchAsync(async (req, res, next) => {
  try {
    const result: any = await SongService.getAllSongFromDB()
    sendResponse({
      res,
      success: result ? true : false,
      message: result.length ? 'Get all song successfully' : 'No song found',
      data: {
        data: result || [],
      },
      code: 200,
    })
  } catch (error) {
    next(error)
  }
})

const SongController = { createSong, getAllSong }

export default SongController
