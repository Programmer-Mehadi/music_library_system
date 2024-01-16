const handleValidationError = (
  error: Error,
): {
  statusCode: number
  message: string
  errors: { path: string; message: string }[]
} => {
  const errors = [
    {
      path: '',
      message: error.message,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errors: errors,
  }
}

export default handleValidationError
