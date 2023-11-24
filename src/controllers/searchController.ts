import { Response,Request } from "express";
import { Pets } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObjects";

export const search = (req:Request,res:Response)=>{

    let query:string = req.query.q as string

    let list = Pets.getFromName(query)

    res.render('pages/pages',{
    list
})
}