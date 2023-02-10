const express = require("express");
const router = express.Router();



// const fieldQueries = require('../db/queries/field');

const summaryQueries = require('../db/queries/summary');
// const harvestingRoutes = require('./harvesting');
// const app = express();



router.get("/planting/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for PLANTING", id);
  summaryQueries.getPlanting(id)
    .then((data) => {
      console.log("Summary PLANTING Route", data);
      res.json(data);
    });

});

router.get("/harvesting/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route ", id);
  summaryQueries.getHarvest(id)
    .then((data) => {
      console.log("Summary Route", data);
      res.json(data);
    });

});

router.get("/packing/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for packing", id);
  summaryQueries.getPacking(id)
    .then((data) => {
      console.log("Summary Packing Route", data);
      res.json(data);
    });

});


router.get("/shipping/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for SHIPPING", id);
  summaryQueries.getShipping(id)
    .then((data) => {
      console.log("Summary SHIPPING Route", data);
      res.json(data);
    });

});

router.delete('/', (req, res) => {
  console.log('THIS IS DELETE SUMMARY', req.body);
  summaryQueries.deleteHarvest(req.body.summary)
    .then(() => {
      res.status(202).send("Okay");
    }).catch((err) => {
      res.status(500).send({ error: err.message });
    });
});


router.put('/planting/:id', (req, res) => {
  let id = req.params.id;
  console.log("WE are TRYING TO UPDATE THE PLANT INFO", id);
  summaryQueries.updatePlanting(req.body)
    .then((data) => {
      console.log("TRYING UPDATE QUERY IN SUMMARY EDIT SOMETHING", data);
      res.json(data);
    });
});



module.exports = router;