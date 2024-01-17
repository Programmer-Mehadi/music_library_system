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

// delete song

const deleteSong = catchAsync(async (req, res, next) => {
  try {
    const { id }: any = req.params
    const result: any = await SongService.deleteSongFromDB(id)
    sendResponse({
      res,
      success: result.affectedRows > 0 ? true : false,
      message:
        result.affectedRows > 0
          ? 'Song deleted successfully'
          : 'Song not found or cannot be deleted',
      data: {
        data: result.affectedRows > 0 ? result : result || null,
      },
      code: 200,
    })
  } catch (error) {
    next(error)
  }
})

// update song
const updateSong = catchAsync(async (req, res, next) => {
  try {
    const { id }: any = req.params
    const data: any = req.body
    const result: any = await SongService.updateSongFromDB(id, data)
    sendResponse({
      res,
      success: result?.affectedRows > 0 ? true : false,
      message:
        result?.affectedRows > 0
          ? 'Song updated successfully'
          : 'Song not found or cannot be updated',
      data: {
        data: result?.affectedRows > 0 ? result : result || null,
      },
      code: 200,
    })
  } catch (error) {
    next(error)
  }
})

// get single song
const getSingleSong = catchAsync(async (req, res, next) => {
  try {
    const { id }: any = req.params
    const result: any = await SongService.getSingleSongFromDB(id)
    sendResponse({
      res,
      success: result ? true : false,
      message: result ? 'Get single song successfully' : 'No song found',
      data: {
        data: result.length > 0 ? result[0] : null,
      },
      code: 200,
    })
  } catch (error) {
    next(error)
  }
})
const SongController = {
  createSong,
  getAllSong,
  deleteSong,
  updateSong,
  getSingleSong,
}

export default SongController
