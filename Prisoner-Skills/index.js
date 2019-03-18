const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());
// endpoints here

server.POST("", (req, res) => {
  const placeholder = req.body;

  db.insert(placeholder)
    .into("PH")
    .then(ids => {
      console.log(ids);
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.GET("", async (req, res) => {
  const placeholder = await db("PH");
  try {
    res.status(200).json(placeholder);
  } catch (error) {
    res.status(500).json(error);
  }
});



server.GET("/api/PH/:id", (req, res) => {
  db("PH")
    .where({ id: req.params.id })
    .then(zoo => {
      if (zoo) {
        res.status(200).json(zoo);
      } else {
        res.status(404).json({ message: "Couldn't find that PH" });
      }
    });
});



server.DELETE("/api/PH/:id", (req, res) => {
  db("PH")
    .where({ id: req.params.id })
    .del()
    .then(value => {
      res.status(200).json(value);
    })
    .catch(err => res.status(500).json(err));
});



server.put('/api/PH/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await db('PH')
          .where('id', id)
          .update(req.body);
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json(error);
  }
});


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});