import type { BaseSystemFields, PlayersViewRecord, UsersRecord, LevelsRecord } from "@src/types/pocketbase";

interface Expand {
    player: BaseSystemFields & UsersRecord,
    level: BaseSystemFields & LevelsRecord,
}

export type Record = BaseSystemFields<Expand> & PlayersViewRecord