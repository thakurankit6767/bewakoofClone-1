const express = require("express");
const address = require("../models/address.model");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
    try {
        const Address = await address.find().lean().exec();
        return res.status(200).send(Address)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get address by Id route

router.get("/:id", async (req, res) => {
    try {
        const Address = await address.find(req.params.id).lean().exec();
        return res.status(200).send(Address)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {
        const Address = await address.create(req.body);
        return res.status(200).send(Address)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const Address = await address.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(Address)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const Address = await address.findByIdAndDelete(req.params.id);
        return res.status(200).send(Address)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;