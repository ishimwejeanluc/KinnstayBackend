// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');
const propertyRoutes = require('./routes/properties');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');
const adminRoutes = require('./routes/admin');
const { authenticateToken, authorizeRoles } = require('./middleware/auth');

app.use(cors()); // Use CORS middleware to allow all origins
app.use(express.json());

app.use('/auth', authRoutes);

app.use('/bookings', authenticateToken, bookingRoutes);
app.use('/payments', authenticateToken, paymentRoutes);
app.use('/properties', authenticateToken, propertyRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/reviews', authenticateToken, reviewRoutes);
app.use('/admin', authenticateToken, authorizeRoles(['admin']), adminRoutes);

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('Server running on port 3000');
});
