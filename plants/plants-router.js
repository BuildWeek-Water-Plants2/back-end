const express = require('express');
const router = express.Router();
const db = require('./plant-model');
const authenticate = require('../auth/authenticate-middleware');


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
    const { nickname, species, water, user_id } = req.body;
    db.newPlant({ nickname, species, water, user_id })
        .then(count => {
            db.findPlants(req.params.id)
                .then(function (data) {
                    res.json(data);
                })
        })
        .catch(err => {
            console.log(err)
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