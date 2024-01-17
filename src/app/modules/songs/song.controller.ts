import SongService from '@src/app/modules/songs/song.service'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'

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

const SongController = { createSong }

export default SongController
