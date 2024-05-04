import { pb } from "@src/database/pocketbase";
import type { Pack } from "@src/types/Pack";
import type { PlayerView } from "@src/types/Player";
import type { Record } from "@src/types/Record";

export default {
    getSingle: async (id: number): Promise<PlayerView> => {
        return await pb.collection('levels_view').getFirstListItem(`levelID=${id}`);
    },
    getList: async ({ start = '1', end = '50', sort = 'rank', asc = 'true' } = {}): Promise<Record[]> => {
        const res = await pb.collection('levels_view').getList(parseInt(start), parseInt(end), {
            sort: `${asc == 'true' ? '+' : '-'}${sort}`
        });

        // @ts-ignore
        return res.items;
    },
    getRecords: async (id: number, { start = '1', end = '50', sort = 'created', status = 'accepted', asc = 'true' } = {}): Promise<Record[]> => {
        const res = await pb.collection('records_view').getList(parseInt(start), parseInt(end), {
            filter: `level.levelID=${id} && status="${status}"`,
            sort: `${asc == 'true' ? '+' : '-'}${sort}`,
            expand: 'level, player'
        });

        // @ts-ignore
        return res.items;
    },
    getPack: async (name: string): Promise<Pack> => {
        return await pb.collection('packs').getFirstListItem(`name="${name}"`, {
            expand: 'levels'
        });
    }
}