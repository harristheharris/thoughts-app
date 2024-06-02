const { ThoughtUser, Thougt } = require('../models')

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
                .then((dbUserData) => res.json(dbUserData))

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
                .then((dbUserData) => {
                    if (!dbUserData) {
                        return res.status(404)
                            .json({ message: "no user found with this id" })
                    }
                    res.json(dbUserData)
                })

        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    





}