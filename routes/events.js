const express = require('express');
const router = express.Router();
const Event = require('../model/event.Schema');

//Getting All Speakers/Events Details.
router.get('/',async (req,res)=>{
  try{
    const events = await Event.find()
  res.send(events);
  console.log(events);
} catch{
    res.status(404)
		res.send({ error: "Error getting  All Speakers Details..!!!" })
}
});
 
//Getting Speakers/Events by ID
router.get("/:id", async (req, res) => {
	try {
		const event = await Event.findOne({ _id: req.params.id })
		res.send(event)
        console.log(event);
	} catch {
		res.status(404)
		res.send({ error: "Error getting Speaker Details..!!!" })
	}
})

//Create New Event/Speakers :
router.post("/", async (req, res) => {
	const event = new Event({
		name: req.body.name, 
		description: req.body.description,
    speaker: req.body.speaker,
    ticket: req.body.ticket,
    maxSeats: req.body.maxSeats,
    bookedSeats: req.body.bookedSeats
  })
	await event.save()
	res.send(event)
    console.log(event);
});

//Update Event/Speaker Details:
router.patch("/:id", async (req, res) => {
	try {
		const event = await Event.findOne({ _id: req.params.id })

		if (req.body.name) {
			event.name = req.body.name
		}

		if (req.body.description) {
			event.description = req.body.description
		}

    if (req.body.speaker) {
          event.speaker = req.body.speaker
		}

    if (req.body.ticket) {
        event.ticket = req.body.ticket
		}

    if (req.body.maxSeats) {
        event.maxSeats = req.body.maxSeats
    }
    
    if (req.body.bookedSeats) {
        event.bookedSeats = req.body.bookedSeats
    }
    
    await event.save()
		res.send(event)
        console.log(event);
	} catch {
		res.status(404)
		res.send({ error: "Error updating Details!" })
	}
});

//Delete Event/Speaker Details: 
router.delete("/:id", async (req, res) => {
	try {
		await Event.deleteOne({ _id: req.params.id })
		res.status(204).send("Speaker Deleted Successfully..!!")
		console.log('Speaker Deleted Successfully..!!');
	} catch {
		res.status(404)
		res.send({ error: "Speaker doesn't exist!" })
	}
});

module.exports = router;