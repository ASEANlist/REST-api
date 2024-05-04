import { Router } from "express";
import player from "@src/utils/player";

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
     *         description: The id of the player
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *           application/json:
     *             schema:
     */
    .get(async (req, res) => {
        try {
            res.send(await player.getSingle(req.params.id))
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    })
router.route('/:id/records')
    /**
     * @openapi
     * "/player/{id}/records":
     *   get:
     *     tags:
     *       - Player
     *     summary: Get a list of record of a player
     *     parameters:
     *       - name: id
     *         in: path
     *         description: The id of the level
     *         required: true
     *         schema:
     *           type: string
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
     *       - name: status
     *         in: query
     *         description: Record's status
     *         required: false
     *         schema:
     *           type: string
     *           default: accepted
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
            const { id } = req.params
            const a = await player.getRecords(id, req.query)
            res.send(a)
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    })

export default router