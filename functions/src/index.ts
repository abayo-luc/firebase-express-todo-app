import {onRequest} from "firebase-functions/v2/https";
import "./config/db";
import app from "./app";

export * from "./events";
export const api = onRequest(app);

