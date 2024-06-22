// import { model, models, Schema } from "mongoose";


// const reactionSchema = new Schema({
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
//   type: { type: String, enum: ['like', 'dislike', 'favorite'], required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// reactionSchema.index({ user: 1, post: 1, type: 1 }, { unique: true });

// module.exports = mongoose.model('Reaction', reactionSchema);