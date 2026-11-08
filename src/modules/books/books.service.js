import { db } from "../../DB/connection.db.js"

export const createBooksCollection = async () => {
    await db.createCollection("books", {
        validator: {
            title: { $type: "string", $ne: "" }
        }
    })
    return { ok: 1 }
}


export const createBooksIndex = async () => {
    return await db.collection("books").createIndex({ title: 1 })
}



export const createBook = async (data) => {
    return await db.collection("books").insertOne(data)
}


export const createBooksBatch = async (data) => {
    return await db.collection("books").insertMany(data)
}



export const updateBook = async (title, year) => {
    return await db.collection("books").updateOne({ title },{ $set: { year } })
}



export const findBookByTitle = async (title) => {
    return await db.collection("books").findOne({ title })
}



export const findBooksByYear = async (from, to) => {
    return await db.collection("books").find({year: {$gte: Number(from), $lte: Number(to)}}).toArray()
}



export const findBooksByGenre = async (genre) => {
    return await db.collection("books").find({ genres: genre }).toArray()
}



export const findBooksSkipLimit = async () => {
    return await db.collection("books").find({}).sort({ year: -1 }).skip(2).limit(3).toArray()
}



export const findBooksWithIntegerYear = async () => {
    return await db.collection("books").find({ year: { $type: "int" } }).toArray()
}



export const findBooksExcludeGenres = async () => {
    return await db.collection("books").find({genres: {$nin: ["Horror", "Science Fiction"]}}).toArray()
}


export const deleteBooksBeforeYear = async (year) => {
    return await db.collection("books").deleteMany({year: { $lt: Number(year) }})
}



export const aggregateBooksAfter2000 = async () => {
    return await db.collection("books").aggregate([{$match: {year: { $gt: 2000 }}},{$sort: {year: -1}}]).toArray()
}


export const aggregateBooksProject = async () => {
    return await db.collection("books").aggregate([{$match: {year: { $gt: 2000 }}},{$project: {_id: 0,title: 1,author: 1,year: 1}}]).toArray()
}


export const aggregateBooksUnwind = async () => {
    return await db.collection("books").aggregate([{$unwind: "$genres"},{$project: {_id: 0,title: 1,genres: 1}}]).toArray()
}