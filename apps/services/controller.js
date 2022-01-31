const db = require('../../models');
const Service = db.service;

exports.findAll = (req, res) => {
    Service.findAll()
        .then(res.send)
        .catch(err => res.status(500).json({error: err, status: "ehh"}))
}