import { Response } from 'express'

interface IData {
  meta?: object
  data?: object | null
}

interface ISendResponse {
  res: Response
  success: boolean
  message?: string
  data: IData | null | undefined
  code: number
}

const sendResponse = ({
  res,
  success,
  message,
  data,
  code = 200,
}: ISendResponse) => {
  const responseData = {
    statusCode: code,
    success: success,
    message: message || null,
    meta: data?.meta || null || undefined,
    data: data?.data || null || undefined,
  }
  return res.status(code).json(responseData)
}

export default sendResponse
