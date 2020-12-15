const { DataTypes } = require("sequelize/types");
const db = require("../models");

module.exports = app => {
  app.post("/api/user_data/:title", (req, res) => {
    db.List.create({
      title: req.body.title
    })
      .then(() => {
        res.redirect(307, "/user_data/list");
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
        res.redirect(307, "/user_data/list");
        console.log("user data updated!");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
