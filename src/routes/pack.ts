import level from "@src/utils/level";
import { Router } from "express";

const router = Router()

router.route('/:name')
    /**
     * @openapi
     * "/level/{id}":
     *   get:
     *     tags:
     *       - Pack
     *     summary: Get a single pack
     *     parameters:
     *       - name: name
     *         in: path
     *         description: The name of the pack
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
            res.send(await level.getPack(req.params.name))
        } catch(err) {
            console.error(err)
            res.status(500).send()
        }
    })

export default router