import { pb } from "@src/database/pocketbase";
import type { BaseSystemFields, LevelsViewRecord, RecordsViewRecord } from "@src/types/pocketbase";

export default {
    getSingle: async (id: number): Promise<BaseSystemFields & LevelsViewRecord> => {
        return await pb.collection('levels_view').getFirstListItem(`levelID=${id}`);
    },
    getList: async ({ start = '1', end = '50', sort = 'rank', asc = 'true' } = {}): Promise<(BaseSystemFields & LevelsViewRecord)[]> => {
        const res = await pb.collection('levels_view').getList(parseInt(start), parseInt(end), {
            sort: `${asc == 'true' ? '+' : '-'}${sort}`
        });

        // @ts-ignore
        return res.items;
    },
    getRecords: async (id: number, { start = '1', end = '50', sort = 'created', status = 'accepted', asc = 'true' } = {}): Promise<(BaseSystemFields & RecordsViewRecord)[]> => {
        const res = await pb.collection('records_view').getList(parseInt(start), parseInt(end), {
            filter: `level.levelID=${id} && status="${status}"`,
            sort: `${asc == 'true' ? '+' : '-'}${sort}`,
            expand: 'level, player'
        });

        // @ts-ignore
        return res.items;
    }
}