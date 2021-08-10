// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const BacklogSchema = new Schema( // should it be Backlog or BacklogSchema?
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    isOpen: { type: Boolean, default: true, required: true },
    color: { type: String, default: true, required: true },
    projectId: { type: String, required: true },
    // changed ref from 'account" to 'project//
    creatorId: { type: ObjectId, ref: 'Project', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
BacklogSchema.virtual('account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
BacklogSchema.virtual('project', {
  localField: 'projectId',
  ref: 'Project',
  foreignField: '_id',
  justOne: true
})
export default BacklogSchema
