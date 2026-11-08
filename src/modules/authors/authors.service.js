import { db } from "../../DB/connection.db.js"

export const createAuthor = async () => {
    return await db.collection("authors").insertOne({
        name: "Author1",
        nationality: "British"
    })
}