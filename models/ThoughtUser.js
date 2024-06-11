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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email'],

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
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

    console.log(this);
    console.log(this.friends);
    
    if (this.friends === undefined) {
        return

    }

    return this.friends.length
})

const ThoughtUser = model('ThoughtUser', ThoughtUserSchema);

module.exports = ThoughtUser; 