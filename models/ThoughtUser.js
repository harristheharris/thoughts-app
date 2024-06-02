const { Schema, model } = require('mongoose');

const ThoughtUserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "An username is required",
            trim: true,
        },
        email: {
            type: String,
            required: "An email is required",
            unique: true,
            //have to figure out matching validation here
        },
        thoughs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ThoughtUser'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//creating virtual that get the amount of friends an user has

ThoughtUserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const ThoughtUser = model('thoughtUser', ThoughtUserSchema);

module.exports = ThoughtUser; 