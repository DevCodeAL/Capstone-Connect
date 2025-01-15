import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema({
    userReaction: { type: String, required: true },
     userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});


const Reaction = mongoose.model('Reaction', reactionSchema);

export default Reaction;