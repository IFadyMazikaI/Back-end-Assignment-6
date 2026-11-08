import { db } from "../../DB/connection.db.js"

export const createLogsCollection = async () => {
    await db.createCollection("logs", {
        capped: true,
        size: 1048576
    })
    return { ok: 1 }
}



export const createLog = async (data) => {
    return await db.collection("logs").insertOne(data)
}



export const getLogsWithBooks = async () => {
    return await db.collection("logs").aggregate([
        {
            $lookup: {
                from: "books",
                localField: "book_id",
                foreignField: "_id",
                as: "book_details"
            }
        },
        {
            $project: {
                _id: 0,
                action: 1,
                book_details: {
                    title: 1,
                    author: 1,
                    year: 1
                }
            }
        }
    ]).toArray()
}