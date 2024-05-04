/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g4g7evr4y87owv")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_oAsgabu` ON `packs` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0g4g7evr4y87owv")

  collection.indexes = []

  return dao.saveCollection(collection)
})
