import { pb } from "@src/database/pocketbase";
import type { BaseSystemFields, PlayersViewRecord, RecordsViewRecord } from "@src/types/pocketbase";

export default {
    getSingle: async (id: string): Promise<BaseSystemFields & PlayersViewRecord> => {
        console.log(id)
        return await pb.collection('players_view').getFirstListItem(`id="${id}"`);
    },
    getList: async ({ start = '1', end = '50', sort = 'rank', asc = 'true' } = {}): Promise<(BaseSystemFields & PlayersViewRecord)[]> => {
        const res = await pb.collection('players_view').getList(parseInt(start), parseInt(end), {
            sort: `${asc == 'true' ? '+' : '-'}${sort}`
        });

        // @ts-ignore
        return res.items;
    },
    getRecords: async (id: string, { start = '1', end = '50', sort = 'created', status = 'accepted', asc = 'true' } = {}): Promise<(BaseSystemFields & RecordsViewRecord)[]> => {
        const res = await pb.collection('records_view').getList(parseInt(start), parseInt(end), {
            filter: `player.id="${id}" && status="${status}"`,
            sort: `${asc == 'true' ? '+' : '-'}${sort}`,
            expand: 'level, player'
        });

        // @ts-ignore
        return res.items;
    }
}