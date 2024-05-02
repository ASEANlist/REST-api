import { pb } from "@src/database/pocketbase";

export default async function(id: number) {
    return await pb.collection('levels_view').getFirstListItem(`levelID=${id}`);
}