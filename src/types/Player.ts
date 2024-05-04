import type { BaseSystemFields, PlayersViewRecord, UsersRecord } from "@src/types/pocketbase";

export type Player = BaseSystemFields & UsersRecord
export type PlayerView = BaseSystemFields & PlayersViewRecord