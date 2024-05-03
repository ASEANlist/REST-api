/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99f7065sq9vpyht")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yzqsy1ww",
    "name": "videoURL",
    "type": "url",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("99f7065sq9vpyht")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yzqsy1ww",
    "name": "videoURL",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
