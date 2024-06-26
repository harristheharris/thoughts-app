const moment = require('moment');
const { Schema, model } = require('mongoose');
const now = moment();

//embedded document
const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
  
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
  
      username: {
        type: String,
        required: true,
      },
  
      createdAt: {
        type: Date,
        default: now.format("YYYY-MM-DD HH:mm:ss"),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

const ThoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
       },
       createdAt: {
        type: Date,
        default: now.format("YYYY-MM-DD HH:mm:ss"),
       },
       username: {
        type: String,
        required: true,
       },
       reactions: [
        ReactionSchema
       ],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
);

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
  const Thought = model("Thought", ThoughtSchema);
  
  module.exports = Thought;