import getLevel from '@src/utils/level/getLevel'
import { Router } from 'express'

const router = Router()

router.use((req, res, next) => {
    res.set('Cache-Control', 'public, s-maxage=180, max-age=180')
    next()
})

router.route('/:id')
    /**
     * @openapi
     * "/level/{id}":
     *   get:
     *     tags:
     *       - Level
     *     summary: Get a single level by the id
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the level
     *         required: true
     *         schema:
     *           type: number
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     */
    .get(async (req, res) => {
        try {
            const { id } = req.params
            res.send(await getLevel(parseInt(id)))
        } catch {
            res.status(500)
        }
    })

export default router