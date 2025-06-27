const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Direct MongoDB connection string without env file
    const mongoURI = 'mongodb+srv://kasachanakya123:S4HcCc9geGkMSNA9@cluster0.lplofyl.mongodb.net/codeguard?retryWrites=true&w=majority&appName=Cluster0';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
