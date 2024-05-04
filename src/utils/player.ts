import { pb } from "@src/database/pocketbase";
import type { PlayerView } from "@src/types/Player";
import type { Record } from "@src/types/Record";

export default {
    getSingle: async (id: string): Promise<PlayerView> => {
        console.log(id)
        return await pb.collection('players_view').getFirstListItem(`id="${id}"`);
    },
    getList: async ({ start = '1', end = '50', sort = 'rank', asc = 'true' } = {}): Promise<Record[]> => {
        const res = await pb.collection('players_view').getList(parseInt(start), parseInt(end), {
            sort: `${asc == 'true' ? '+' : '-'}${sort}`
        });

        // @ts-ignore
        return res.items;
    },
    getRecords: async (id: string, { start = '1', end = '50', sort = 'created', status = 'accepted', asc = 'true' } = {}): Promise<Record[]> => {
        const res = await pb.collection('records_view').getList(parseInt(start), parseInt(end), {
            filter: `player.id="${id}" && status="${status}"`,
            sort: `${asc == 'true' ? '+' : '-'}${sort}`,
            expand: 'level, player'
        });

        // @ts-ignore
        return res.items;
    }
}