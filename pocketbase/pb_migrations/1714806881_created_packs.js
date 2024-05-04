/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0g4g7evr4y87owv",
    "created": "2024-05-04 07:14:41.378Z",
    "updated": "2024-05-04 07:14:41.378Z",
    "name": "packs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vta5u6o4",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2hzwuqxg",
        "name": "levels",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4p5wqtngor5zl5v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0g4g7evr4y87owv");

  return dao.deleteCollection(collection);
})
