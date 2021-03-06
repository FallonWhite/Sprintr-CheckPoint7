// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const TaskSchema = new Schema(
  {
    weight: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'inProgress', 'review', 'done'], required: true },
    body: { type: String, required: true },
    projectId: { type: String, required: true },
    sprintId: { type: String },
    backlogId: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Project', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
TaskSchema.virtual('account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
TaskSchema.virtual('project', {
  localField: 'projectId',
  ref: 'Project',
  foreignField: '_id',
  justOne: true
})

TaskSchema.virtual('sprint', {
  localField: 'sprintId',
  ref: 'Sprint',
  foreignField: '_id',
  justOne: true
})

TaskSchema.virtual('Backlog', {
  localField: 'backlogId',
  ref: 'Backlog',
  foreignField: '_id',
  justOne: true
})
export default TaskSchema
