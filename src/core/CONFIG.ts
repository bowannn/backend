export const CONFIG = {
  db: process.env.DB_CONNECTION || 'mongodb://mongo:27017/unidev',
  app: {
    port: process.env.PORT || 3000
  },
  jwt_key: process.env.JWT_KEY || 'secreto-temporal-santoto'
};