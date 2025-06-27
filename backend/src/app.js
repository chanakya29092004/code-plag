const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const submissionRoutes = require('./routes/submission');
const analysisRoutes = require('./routes/analysis');
const analyticsRoutes = require('./routes/analytics');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes (to be implemented)
app.use('/api/submit', submissionRoutes);
app.use('/api/analyze', analysisRoutes);
app.use('/api/analytics', analyticsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));