import { config } from 'dotenv';
config();

export const DB_DEV_NAME= process.env.DB_DEV_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD= process.env.DB_PASSWORD; 
export const DB_PORT = process.env.DB_PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV;
