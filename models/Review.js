const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Property = require("./Property");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  guest_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  property_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Property,
      key: "id",
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

Review.belongsTo(User, { foreignKey: "guest_id", as: "guest" });
Review.belongsTo(Property, { foreignKey: "property_id", as: "property" });
User.hasMany(Review, { foreignKey: "guest_id" });
Property.hasMany(Review, { foreignKey: "property_id" });

module.exports = Review;
