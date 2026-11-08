import { Router } from "express"
import { createLog, createLogsCollection, getLogsWithBooks } from "./logs.service.js"
const router = Router()

router.post("/collection/logs/capped", async (req, res, next) => {
    try {
        const data = await createLogsCollection()
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})


router.post("/logs", async (req, res, next) => {
    try {
        const data = await createLog(req.body)
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})



router.get("/books/aggregate4", async (req, res, next) => {
    try {
        const data = await getLogsWithBooks()
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})



export default router