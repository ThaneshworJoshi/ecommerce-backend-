# E-commerce Backend API

A scalable Node.js Express backend API for e-commerce applications, built with TypeScript and MongoDB.

## 🚀 Features

- **TypeScript** - Full type safety and better development experience
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Security** - Helmet, CORS, Rate limiting
- **Error Handling** - Centralized error handling middleware
- **Logging** - Request logging with Morgan
- **Environment Configuration** - Environment-based configuration
- **Modular Architecture** - Clean, scalable folder structure

## 📁 Project Structure

```
src/
├── config/          # Configuration files
│   └── database.ts  # Database connection
├── middleware/      # Custom middleware
│   └── errorHandler.ts
├── routes/          # API routes
│   └── health.ts    # Health check endpoint
├── utils/           # Utility functions
│   └── logger.ts    # Logging utility
└── server.ts        # Main application file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running locally or update MONGODB_URI in .env
   ```

5. **Run the application**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm run build
   npm start
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## 🌐 API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Root
- `GET /` - API information

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
CORS_ORIGIN=http://localhost:3000
```

## 🏗️ Architecture

This project follows a modular architecture pattern:

- **Routes** - Handle HTTP requests and responses
- **Middleware** - Process requests before they reach routes
- **Config** - Application configuration
- **Utils** - Reusable utility functions

## 🔒 Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Prevent abuse
- **Input Validation** - Validate request data
- **Error Handling** - Secure error responses

## 📝 Development

### Adding New Routes

1. Create a new route file in `src/routes/`
2. Export the router
3. Import and use in `server.ts`

### Adding Middleware

1. Create middleware in `src/middleware/`
2. Import and use in `server.ts` or specific routes

### Database Models

1. Create models in `src/models/` (when needed)
2. Use Mongoose schemas
3. Import in routes or services

## 🧪 Testing

```bash
npm test
```

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

Thaneshwor Joshi - Ecommerce Node Backend Project

---

**Note**: This is a portfolio project demonstrating backend development skills with Node.js, Express, TypeScript, and MongoDB. 