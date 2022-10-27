const express = require('express');
const router = express.Router();
const User = require('../model/user.Schema');

//Get all Users
router.get("/", async (req, res) => {
	const users = await User.find()
	res.send(users)
    console.log(users);
});

//Get User By Id
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })
		res.send(user)
        console.log(user);
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})

//Create New User
router.post("/", async (req, res) => {
	const user = new User({
		name: req.body.name, 
		email: req.body.email,
        password: req.body.password,
        mobileNumber: req.body.mobileNumber
	})
	await user.save()
	res.send(user)
    console.log(user);
});

//Update User Details
router.patch("/:id", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })

		if (req.body.name) {
			user.name = req.body.name
		}

		if (req.body.email) {
			user.email = req.body.email
		}

        if (req.body.password) {
			user.password = req.body.password
		}

        if (req.body.mobileNumber) {
			user.mobileNumber = req.body.mobileNumber
		}

		await user.save()
		res.send(user)
        console.log(user);
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
});

//Delete User
router.delete("/:id", async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id })
		res.status(204).send("User Deleted Successfully..!!")
		console.log('User Deleted Successfully..!!');
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
});

module.exports = router;