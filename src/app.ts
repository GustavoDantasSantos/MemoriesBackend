import "reflect-metadata";
import Express from 'express';
import { AppDataSource } from "./database/data-source";

export const app = Express();

AppDataSource.initialize().then(() => {
    console.log('Connect with database');
}).catch((error) => {
    console.error(error);
});
