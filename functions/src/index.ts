import * as functions from "firebase-functions";
import "./config/db";
import app from "./app";

export const api = functions.https.onRequest(app);

