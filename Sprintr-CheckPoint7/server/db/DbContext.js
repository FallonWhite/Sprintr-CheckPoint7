// @ts-ignore
import mongoose from 'mongoose'
import ProjectSchema from '../models/Project'
import { AccountSchema } from '../models/Account'

class DbContext {
Account = mongoose.model('Account', AccountSchema)
Projects = mongoose.model('Project', ProjectSchema);

}

export const dbContext = new DbContext()

