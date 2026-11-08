import { Router } from "express"
import { aggregateBooksAfter2000, aggregateBooksProject, aggregateBooksUnwind, createBook, createBooksBatch, createBooksCollection,createBooksIndex, deleteBooksBeforeYear, findBookByTitle, findBooksByGenre, findBooksByYear, findBooksExcludeGenres, findBooksSkipLimit, findBooksWithIntegerYear, updateBook  } from "./books.service.js"
const router = Router()

router.post("/collection/books", async (req, res, next) => {
    try {
        const data = await createBooksCollection()
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})



router.post("/collection/books/index", async (req, res, next) => {
    try {
        const data = await createBooksIndex()
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})



router.post("/books", async (req, res, next) => {
    try {
        const data = await createBook(req.body)
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})




router.post("/books/batch", async (req, res, next) => {
    try {
        const data = await createBooksBatch(req.body)
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/title", async (req, res, next) => {
    try {
        const data = await findBookByTitle(req.query.title)
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})


router.patch("/books/:title", async (req, res, next) => {
    try {
        const data = await updateBook(req.params.title, req.body.year)
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})




router.get("/books/year", async (req, res, next) => {
    try {
        const data = await findBooksByYear(
            req.query.from,
            req.query.to
        )
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/genre", async (req, res, next) => {
    try {
        const data = await findBooksByGenre(req.query.genre)
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/skip-limit", async (req, res, next) => {
    try {
        const data = await findBooksSkipLimit()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})




router.get("/books/year-integer", async (req, res, next) => {
    try {
        const data = await findBooksWithIntegerYear()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/exclude-genres", async (req, res, next) => {
    try {
        const data = await findBooksExcludeGenres()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})


router.delete("/books/before-year", async (req, res, next) => {
    try {
        const data = await deleteBooksBeforeYear(req.query.year)
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/aggregate1", async (req, res, next) => {
    try {
        const data = await aggregateBooksAfter2000()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/aggregate2", async (req, res, next) => {
    try {
        const data = await aggregateBooksProject()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/aggregate3", async (req, res, next) => {
    try {
        const data = await aggregateBooksUnwind()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})


export default router