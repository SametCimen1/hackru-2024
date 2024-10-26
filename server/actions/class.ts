'use server'

import { createSafeActionClient } from "next-safe-action"
import { auth } from "../auth";
import { db } from "..";
import { classes } from "../schema";
import z from 'zod';
const action = createSafeActionClient();

export const createClass = action(z.object({
    courseTitle: z.string(),
    courseDescription: z.string(),
    courseCode: z.string(),
    courseSyllabus: z.string()

}), async({courseTitle, courseDescription, courseCode, courseSyllabus}) => {
    console.log("HEREEEEEEE2222EEE\n");
        const user = await auth();
        if(!user) return {error: "user not found"}


        console.log(courseTitle)

        console.log("HEREEEEEEEEEE\n");

        const order = await db.insert(classes).values({
            courseTitle,
            courseDescription,
            courseCode,
            courseSyllabus
        }).returning();

        return {success: "Class has been created"}
})