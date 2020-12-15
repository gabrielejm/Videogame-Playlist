module.exports = (sequelize, Datatypes) => {
  const List = sequelize.define("User_List", {
    // Game Title can't be Null
    title: {
      type: Datatypes.STRING,
      allowNull: false
    },
    // Must choose a game status of "Completed, Currently Playing, Dropped, Want to Play"
    status: { type: Datatypes.STRING, allowNull: false },
    // Multiplayer or Single Player
    type: Datatypes.STRING,
    // Optional Categories
    hoursPlayed: Datatypes.INTEGER,
    rating: Datatypes.INTEGER
  });

  List.associate = models => {
    // Must be User attached to List
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return List;
};
