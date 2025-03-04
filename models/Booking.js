const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Property = require("./Property");

const Booking = sequelize.define("Booking", {
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
  check_in: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  check_out: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
    defaultValue: "pending",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

Booking.belongsTo(User, { foreignKey: "guest_id", as: "guest" });
Booking.belongsTo(Property, { foreignKey: "property_id", as: "property" });
User.hasMany(Booking, { foreignKey: "guest_id" });
Property.hasMany(Booking, { foreignKey: "property_id" });

module.exports = Booking;
