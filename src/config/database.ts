import mongoose from 'mongoose';
import logger from '@/utils/logger';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI =
      process.env['MONGODB_URI_PROD'] || 'mongodb://localhost:27017/ecommerce';
    console.log(mongoURI, 'mongourl')
    await mongoose.connect(mongoURI);

    logger.info('MongoDB Connected Successfully');

    mongoose.connection.on('error', err => {
      logger.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });
  } catch (error) {
    logger.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
