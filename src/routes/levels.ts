import level from '@src/utils/level'
import { Router } from 'express'

const router = Router()

router.use((req, res, next) => {
    res.set('Cache-Control', 'public, s-maxage=180, max-age=180')
    next()
})

router.route('/')
    /**
     * @openapi
     * "/levels":
     *   get:
     *     tags:
     *       - Level
     *     summary: Get a list of level
     *     parameters:
     *       - name: start
     *         in: query
     *         description: Range start index
     *         required: false
     *         schema:
     *           type: number
     *           default: 0
     *       - name: end
     *         in: query
     *         description: Range end index
     *         required: false
     *         schema:
     *           type: number
     *           default: 50
     *       - name: sort
     *         in: query
     *         description: Property of level to sort by
     *         required: false
     *         schema:
     *           type: string
     *           default: rank
     *       - name: asc
     *         in: query
     *         description: Sort ascending
     *         required: false
     *         schema:
     *           type: boolean
     *           default: true
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     */
    .get(async (req, res) => {
        try {
            res.send(await level.getList(req.query))
        } catch(err) {
            console.error(err)
            res.status(500).send()
        }
    })

export default router