import type { BaseSystemFields, PacksRecord } from "@src/types/pocketbase";
import type { Level } from "@src/types/Level";

interface Expand {
    levels: Level[]
}

export type Pack = BaseSystemFields<Expand> & PacksRecord