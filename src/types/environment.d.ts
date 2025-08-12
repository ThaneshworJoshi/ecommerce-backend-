declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
      MONGODB_URI?: string;
      CORS_ORIGIN?: string;
      JWT_SECRET?: string;
      JWT_EXPIRE?: string;
    }
  }
}

export {};
