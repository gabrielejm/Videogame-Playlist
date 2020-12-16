const db = require("../models");

module.exports = app => {
  // Loads User's Full List
  const loadPage = () => {app.get("/api/user_data/:user", (req, res) => {
    db.List.findAll({where: { user_id: req.params.user
    }}).then(dbList => {
      res.json(dbList)
    } )
  })}

  // Loads User's List by Specified Status
  app.get("/api/user_data/:user/:status", (req, res) => {
    db.List.findAll({where: {
      user: req.params.user,
      status: req.params.status
    }}).then(dbList => {
      res.json(dbList)
    })
  })

  // Updates the Status of the selected game
  app.put("/api/game", (req, res) => {
    db.List.update(req.body.status, 
      {where: { id: req.body.id}}).then(dbList => {
        res.json(dbList)
      } )
  })

  // Updates the Rating of the selected game 
  app.put("/api/game", (req, res) => {
    db.List.update(req.body.rating, 
      {where: {id : req.body.id}}).then(dbList => {
        res.json(dbList)
      })
  })

  // Updates the Hours Played of the selected game
  app.put("/api/game", (req, res) => {
    db.List.update(req.body.hoursPlayed, 
      {where: {id: req.body.id
    }}).then(dbList => {
      res.json(dbList)
    })
  })

  // Posts game to List table and loads User's List
  app.post("/api/user_data/list", (req, res) => {
    db.List.create({
      title: req.body.title,
      status: req.body.status,
      user: req.body.user,
      type: req.body.type
    })
      .then(() => {
        loadPage()
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Deletes game from List table and load's User's List
  app.delete("/api/user_data/list", (req, res) => {
    db.List.destroy(
      {
        where: {
          title: req.body.title,
          user_id: req.body.user
        },
      },
      console.log("deleting game...")
    )
      .then(() => {
        loadPage()
        console.log("user data updated!");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
