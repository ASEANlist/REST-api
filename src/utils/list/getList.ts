import { pb } from "@src/database/pocketbase";
import type { LevelsViewRecord, LevelsViewResponse } from "@src/types/pocketbase";

export default async function ({ start = '1', end = '50', sort = 'rank', asc = 'true' } = {}): Promise<LevelsViewRecord[]> {
    const res = await pb.collection('levels_view').getList(parseInt(start), parseInt(end), {
        sort: `${asc == 'true' ? '+' : '-'}${sort}`
    });

    // @ts-ignore
    return res.items;
}