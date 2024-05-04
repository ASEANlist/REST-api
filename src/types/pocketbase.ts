/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Levels = "levels",
	LevelsView = "levels_view",
	Packs = "packs",
	PlayersView = "players_view",
	Records = "records",
	RecordsView = "records_view",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type LevelsRecord = {
	createdBy: string
	levelID: number
	name: string
	rating: number
	videoID: string
}

export type LevelsViewRecord<Trank = unknown> = {
	createdBy: string
	levelID: number
	name: string
	rank?: null | Trank
	rating: number
	videoID: string
}

export type PacksRecord = {
	levels?: RecordIdString[]
	name?: string
}

export type PlayersViewRecord<Trank = unknown, Trating = unknown> = {
	avatar?: string
	country: string
	discord?: string
	rank?: null | Trank
	rating?: null | Trating
	username?: string
	youtube?: string
}

export enum RecordsStatusOptions {
	"pending" = "pending",
	"accepted" = "accepted",
	"rejected" = "rejected",
}
export type RecordsRecord = {
	level: RecordIdString
	player: RecordIdString
	progress: number
	status: RecordsStatusOptions
	videoURL: string
}

export enum RecordsViewStatusOptions {
	"pending" = "pending",
	"accepted" = "accepted",
	"rejected" = "rejected",
}
export type RecordsViewRecord = {
	level: RecordIdString
	player: RecordIdString
	progress: number
	rating?: number
	status: RecordsViewStatusOptions
	videoURL: string
}

export type UsersRecord = {
	avatar?: string
	country: string
	discord?: string
	youtube?: string
}

// Response types include system fields and match responses from the PocketBase API
export type LevelsResponse<Texpand = unknown> = Required<LevelsRecord> & BaseSystemFields<Texpand>
export type LevelsViewResponse<Trank = unknown, Texpand = unknown> = Required<LevelsViewRecord<Trank>> & BaseSystemFields<Texpand>
export type PacksResponse<Texpand = unknown> = Required<PacksRecord> & BaseSystemFields<Texpand>
export type PlayersViewResponse<Trank = unknown, Trating = unknown, Texpand = unknown> = Required<PlayersViewRecord<Trank, Trating>> & BaseSystemFields<Texpand>
export type RecordsResponse<Texpand = unknown> = Required<RecordsRecord> & BaseSystemFields<Texpand>
export type RecordsViewResponse<Texpand = unknown> = Required<RecordsViewRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	levels: LevelsRecord
	levels_view: LevelsViewRecord
	packs: PacksRecord
	players_view: PlayersViewRecord
	records: RecordsRecord
	records_view: RecordsViewRecord
	users: UsersRecord
}

export type CollectionResponses = {
	levels: LevelsResponse
	levels_view: LevelsViewResponse
	packs: PacksResponse
	players_view: PlayersViewResponse
	records: RecordsResponse
	records_view: RecordsViewResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'levels'): RecordService<LevelsResponse>
	collection(idOrName: 'levels_view'): RecordService<LevelsViewResponse>
	collection(idOrName: 'packs'): RecordService<PacksResponse>
	collection(idOrName: 'players_view'): RecordService<PlayersViewResponse>
	collection(idOrName: 'records'): RecordService<RecordsResponse>
	collection(idOrName: 'records_view'): RecordService<RecordsViewResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
