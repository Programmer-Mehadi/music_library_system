import db from '@src/db'
import util from 'util'

const query = util.promisify(db.query).bind(db)

export default query
