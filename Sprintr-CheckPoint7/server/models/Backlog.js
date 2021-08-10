// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId= Schema.Types.ObjectId //where does Types come from

// export const BacklogSchema= new Schema(
//   {
    // name: { type: String, required: true },
    // body: { type: String, required: true},
    // isOpen: { type: Boolean, required: true},
    // color: { type: String, required: true},
    // projectId: { type: String, required: true },
    // creatorId: { type: ObjectId, ref: 'Account', required: true }
//   },
//   { timestamps: true, toJSON: { virtuals: true } }
  

export const BacklogSchema= new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true},
    isOpen: { type: Boolean, required: true},
    color: { type: String, required: true},
    projectId: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
BacklogSchema.virtual('account', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: 'id',
  justOne: true
})
BacklogSchema.virtual('project', {
  localField: 'projectId',
  ref: 'Project',
  foreignField: 'id',
  justOne: true
})

 export default BacklogSchema