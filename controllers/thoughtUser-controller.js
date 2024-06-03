const { ThoughtUser, Thought } = require('../models')

module.exports = {
    //get all the students
    async getUsers(req, res) {
        try {
            const user = await ThoughtUser
                .find().populate({
                    path: "friends",
                    select: "-__v",
                })
                .select("-__v")
                .sort({ _id: -1 })
                .then((user) => res.json(user))

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getUserById(req, res) {
        try {

            const user = await ThoughtUser.findOne({ _id: req.params.id })
                .populate({
                    path: "thoughts",
                    select: "-__v",
                })
                .populate({
                    path: "friends",
                    select: "-__v"
                })
                .select("-__v")
                .then((user) => {
                    if (!dbUserData) {
                        return res.status(404)
                            .json({ message: "no user found with this id" })
                    }
                    res.json(user)
                })

        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async addUser(req, res) {
        try {
            const user = await ThoughtUser.create(req.body)
            res.json(user)

        } catch (err) {
            res.status(500).json(err);

        }
    },


    async deleteUser(req, res) {
        try {
            const user = await ThoughtUser.findOneAndDelete({ _id: req.params.id })
                .then((user) => {
                    if (!user) {
                        return res.status(400).json({ message: "no user with this id" })
                    }
                })
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {

            const user = await ThoughtUser.findOneAndUpdate(
                { _id: params.id },
                { $set: req.body },
                { runValidators: true, new: true });

            if (!user) {
                return res.status(404).json({ message: 'no user with this id' })
            }

            res.json(user)

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend({ params }, res) {
        try {
            const user = await ThoughtUser.findByIdAndUpdate(
                { _id: params.userId },
                { $addToSet: { friends: params.friendId } },
                { nre: true, runValidators: true }
            )

            if (!user) {
                res.status(404).json({ message: "no user with that id" })
                return;
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeFriend( { params }, res) {
        try {
            const user = await ThoughtUser.findByIdAndUpdate(
                { _id: params.userId },
                { $pill: { friends: params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "no user with this id" });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }






}