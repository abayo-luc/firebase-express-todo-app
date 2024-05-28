import {Request, Response} from "express";
import {DocumentData} from "firebase-admin/firestore";
import {db} from "../../../config/db";


/**
 * @description main controller
 * @class Main
 */
class MainController<T extends DocumentData> {
  collection: string;
  /**
   * @constructor
   * @param {string} collection - collection name
   */
  constructor(collection: string) {
    this.collection = collection;
  }
  /**
   * @route GET /api/v1/*
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @return {object} 200 - An array of record info
   * @return {Error}  default - Unexpected error
   */
  getAll = async (req: Request, res: Response) => {
    try {
      const results = await db.collection(this.collection).get();
      const data = results.docs.map((doc) => doc.data());
      return res.status(200).send(data);
    } catch (error) {
      const e = error as Error;
      return res.status(400).send({message: e.message});
    }
  };

  /**
   * @route GET /api/v1/*
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @return {object} 200 - An  record info
   * @return {Error}  default - Unexpected error
   */
  getOne = async (req: Request, res: Response) => {
    return res.json({message: "get one"});
  };

  /**
   * @route POST /api/v1/*
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @return {object} 200 - An  record info
   * @return {Error}  default - Unexpected error
   */
  create = async (req: Request, res: Response) => {
    const {body} = req;
    try {
      const docRef = await db.collection(this.collection).add(body);
      res.status(201).json({id: docRef.id, ...body});
    } catch (error) {
      const err = error as unknown as Error;
      res.status(500).json({error: err.message});
    }
  };

  /**
   * @route PUT /api/v1/*
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @return {object} 200 - An  record info
   * @return {Error}  default - Unexpected error
   */
  update = async (req: Request, res: Response) => {
    const {
      body: payload,
      params: {id},
    } = req;
    console.log(payload, id);
    res.status(200).json({message: "update"});
  };

  /**
   * @route DELETE /api/v1/*
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @return {object} 200 - An  record info
   * @return {Error}  default - Unexpected error
   */
  delete = async (req: Request, res: Response) => {
    const {
      params: {id},
    } = req;
    console.log(id);
    return res.status(204).send();
  };
}

export default MainController;
