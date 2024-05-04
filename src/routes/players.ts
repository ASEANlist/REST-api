import player from '@src/utils/player'
import { Router } from 'express'

const router = Router()

router.use((req, res, next) => {
    res.set('Cache-Control', 'public, s-maxage=180, max-age=180')
    next()
})

router.route('/')
    /**
     * @openapi
     * "/players":
     *   get:
     *     tags:
     *       - Player
     *     summary: Get a list of player
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
            res.send(await player.getList(req.query))
        } catch(err) {
            console.error(err)
            res.status(500).send()
        }
    })

export default router