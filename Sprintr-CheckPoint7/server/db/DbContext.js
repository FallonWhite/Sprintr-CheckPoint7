// @ts-ignore
import mongoose from 'mongoose'
import ProjectSchema from '../models/Project'
import { AccountSchema } from '../models/Account'
import { BacklogSchema } from '../models/Backlog'
import { SprintSchema } from '../models/Sprint'

class DbContext {
Account = mongoose.model('Account', AccountSchema)
Projects = mongoose.model('Project', ProjectSchema);
backlogs = mongoose.model('Backlog', BacklogSchema);
sprint = mongoose.model('Sprint', SprintSchema);

}

export const dbContext = new DbContext()

