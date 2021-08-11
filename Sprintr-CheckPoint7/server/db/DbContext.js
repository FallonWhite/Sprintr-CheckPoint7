// @ts-ignore
import mongoose from 'mongoose'
import ProjectSchema from '../models/Project'
import { AccountSchema } from '../models/Account'
import { BacklogSchema } from '../models/Backlog'
import { SprintSchema } from '../models/Sprint'
import { TaskSchema } from '../models/Task'
import { NoteSchema } from '../models/Note'

class DbContext {
Account = mongoose.model('Account', AccountSchema)
Projects = mongoose.model('Project', ProjectSchema);
backlogs = mongoose.model('Backlog', BacklogSchema);
sprints = mongoose.model('Sprint', SprintSchema);
tasks = mongoose.model('Task', TaskSchema);
notes = mongoose.model('Note', NoteSchema)
}

export const dbContext = new DbContext()
