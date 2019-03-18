const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send('SANITY CHECK!!')
})

server.post("", (req, res) => {
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

server.get("/api/PH", async (req, res) => {
  const allPH = await db("PH");
  try {
    res.status(200).json(allPH);
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get("/api/PH2", async (req, res) => {
  const PH2 = await db("PH2");
  try {
    res.status(200).json(PH2);
  } catch (error) {
    res.status(500).json(error);
  }
});


server.get("/api/PH/:id", (req, res) => {
  db("PH")
    .where({ id: req.params.id })
    .then(PH => {
      if (PH) {
        res.status(200).json(PH);
      } else {
        res.status(404).json({ message: "Couldn't find that PH" });
      }
    });
});
server.get("/api/PH2/:id", (req, res) => {
  db("PH2")
    .where({ id: req.params.id })
    .then(PH2 => {
      if (PH2) {
        res.status(200).json(PH2);
      } else {
        res.status(404).json({ message: "Couldn't find that PH" });
      }
    });
});



server.delete("/api/PH/:id", (req, res) => {
  db("PH")
    .where({ id: req.params.id })
    .del()
    .then(value => {
      res.status(200).json(value);
    })
    .catch(err => res.status(500).json(err));
});
server.delete("/api/PH2/:id", (req, res) => {
  db("PH2")
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
server.put('/api/PH2/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await db('PH2')
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