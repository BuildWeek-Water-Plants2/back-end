const express = require('express');
const router = express.Router();
const db = require('./plant-model');
const { authenticate } = require('../auth/authenticate-middleware');


router.get('/', (req, res) => {
    db.findPlants(req.params.id)
        .then(function (data) {
            res.json(data);
        })

})

router.get('/:id', (req, res) => {
    db.findPlantById(req.params.id)
        .then(function (data) {
            res.json(data);
        })
})

router.post('/', authenticate, (req, res) => {
    const { pName, pContent, user } = req.body;
    db.newPlant({ pName, pContent, user })
        .then(count => {
            db.findPlants(req.params.id)
                .then(function (data) {
                    res.json(data);
                })
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(count => {
            db.findPlants(req.params.id)
                .then(function (data) {
                    res.json(data);
                })
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', authenticate, (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(count => {
            db.findPlants(req.params.id)
                .then(function (data) {
                    res.json(data);
                })
        });
});


module.exports = router;