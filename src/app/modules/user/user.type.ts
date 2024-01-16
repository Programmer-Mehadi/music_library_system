export interface IUSER {
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
}
