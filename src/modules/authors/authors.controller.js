import { Router } from "express"
import { createAuthor } from "./authors.service.js"
const router = Router()

router.post("/collection/authors", async (req, res, next) => {
    try {
        const data = await createAuthor()
        return res.status(201).json(data)
    } catch (error) {
        next(error)
    }
})

export default router