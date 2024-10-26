'use server'

import { eq } from "drizzle-orm"
import { db } from ".."
import { classes } from "../schema"


export async function getClasses(){
    try {
        const product = await db.query.classes.findMany({
            limit: 20,
        }, );

        console.log("DB PRODUCT RETURNING")
        console.log(product)

        if(!product) throw new Error("product not found");
        return product

    } catch (error) {
        return {error: "failed to get the product"}
    }
}