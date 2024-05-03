import { pb } from "@src/database/pocketbase";
import type { LevelsViewRecord } from "@src/types/pocketbase";

export default async function(id: number): Promise<LevelsViewRecord> {
    return await pb.collection('levels_view').getFirstListItem(`levelID=${id}`);
}