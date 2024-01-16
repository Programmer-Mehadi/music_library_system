import bcrypt from 'bcrypt'

const passwordHash = (password: string) => {
  const saltRounds = 10
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      return password
    }
    return hash
  })
}

const passwordCompare = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash)
}

const passwordBcrypt = { passwordHash, passwordCompare }

export default passwordBcrypt
