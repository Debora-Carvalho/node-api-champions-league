import {Request, Response} from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req:Request, res:Response) => {
    const httpResponse = await service.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);
    
    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }  
};

export const deletePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await service.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};