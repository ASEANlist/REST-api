import type { BaseSystemFields, PlayersViewRecord, RecordsViewRecord, UsersRecord, LevelsRecord } from "@src/types/pocketbase";

interface RecordExpand {
    player: BaseSystemFields & UsersRecord,
    level: BaseSystemFields & LevelsRecord,
}

export type Record = BaseSystemFields<RecordExpand> & PlayersViewRecord