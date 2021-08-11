// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const TaskId = Schema.Types.TaskId
const ObjectId = Schema.Types.ObjectId

export const NoteSchema = new Schema(
  {
    body: { type: String, required: true },
    taskId: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true }
    // instead of project the need Account for ref
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
NoteSchema.virtual('account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
NoteSchema.virtual('task', {
  localField: 'taskId',
  ref: 'Task',
  foreignField: '_id',
  justOne: true
})
export default NoteSchema
