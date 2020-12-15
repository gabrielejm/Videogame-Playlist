const db = require("../models");

module.exports = app => {
  app.get("/api/user_data/:user", (req, res) => {
    db.List.findAll({where: { user: req.params.user
    }}).then(dbList => {
      res.json(dbList)
    } )
  })

  app.get("/api/user_data/:user/:status", (req, res) => {
    db.List.findAll({where: {
      user: req.params.user,
      status: req.params.status
    }}).then(dbList => {
      res.json(dbList)
    })
  })

  app.put("/api/game", (req, res) => {
    db.List.update(req.body.status, 
      {where: { id: req.body.id}}).then(dbList => {
        res.json(dbList)
      } )
  })

  app.post("/api/user_data/:user/:status/:title", (req, res) => {
    db.List.create({
      title: req.body.title,
      status: req.params.status,
      user: req.params.user
    })
      .then(() => {
        res.redirect(307, "api/user_data/:user");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.delete("/api/user_data/list/:title", (req, res) => {
    db.List.destroy(
      {
        where: {
          title: req.params.title,
        },
      },
      console.log("deleting game...")
    )
      .then(() => {
        res.redirect(307, "api/user_data/:user");
        console.log("user data updated!");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
