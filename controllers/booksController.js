const db = require("../models");

module.exports={
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({title})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    }
}