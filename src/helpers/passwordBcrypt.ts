import bcrypt from 'bcrypt'

const passwordHash = (password: string) => {
  const saltRounds = 10
  return bcrypt.hashSync(password, saltRounds)
}

const passwordCompare = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash)
}

const passwordBcrypt = { passwordHash, passwordCompare }

export default passwordBcrypt
