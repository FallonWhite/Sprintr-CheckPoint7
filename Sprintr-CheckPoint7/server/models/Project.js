// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId= Schema.Types.ObjectId

export const Project= new Schema(
  {
    subs: [{ type: String, unique: true }],
    name: { type: String, required: true },
    description: { type: String, required: true},
    creatorId: { type: ObjectId, ref: 'Account', required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Project.virtual('account', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: 'id',
    justOne: true
  })
  
  export default Project