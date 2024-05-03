import getList from '@src/utils/list/getList'
import { Router } from 'express'

const router = Router()

    /**
     * @openapi
     * "/list/dl":
     *   get:
     *     tags:
     *       - List
     *     summary: Get all records of the Demon List
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

router.route('/')
    .get(async (req, res) => {
        try {
            res.send(await getList(req.query))
        } catch {
            res.status(500)
        }
    })

export default router