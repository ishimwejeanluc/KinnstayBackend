const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Booking = require("./Booking");
const User = require("./User");

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  booking_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Booking,
      key: "id",
    },
  },
  guest_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.ENUM("stripe", "paypal", "card"),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("paid", "failed", "pending"),
    defaultValue: "pending",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

Payment.belongsTo(Booking, { foreignKey: "booking_id", as: "booking" });
Payment.belongsTo(User, { foreignKey: "guest_id", as: "guest" });
Booking.hasOne(Payment, { foreignKey: "booking_id" });
User.hasMany(Payment, { foreignKey: "guest_id" });

module.exports = Payment;
