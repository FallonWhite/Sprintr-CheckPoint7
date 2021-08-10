// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SprintSchema = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    isOpen: { type: Boolean, default: true, required: true },
    color: { type: String, default: true, required: true },
    projectId: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
SprintSchema.virtual('account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: 'id',
  justOne: true
})
SprintSchema.virtual('project', {
  localField: 'projectId',
  ref: 'Project',
  foreignField: 'id',
  justOne: true
})

export default SprintSchema
