import { Request, Response } from "express"
import { Product } from "../models/Product"

export const home = (req:Request , res:Response)=>{

    let age:number = 20
    let showOld: boolean = false

    if(age >= 18){
        showOld = true
    }

    let list = Product.getAll()
    let expensiveList = Product.getFromPriceAfter(15)
    

    res.render('pages/home',{
        name:'Carlos',
        showOld,
        products:list,
        expensives: expensiveList,
        })
}