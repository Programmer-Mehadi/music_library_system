/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
async function login(req: any, res: any, next: any) {
  res.json({ message: 'Login' })
}

const AuthController = {
  login,
}

export default AuthController
