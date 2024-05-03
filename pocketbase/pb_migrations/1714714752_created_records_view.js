/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j3k9nulf29i27to",
    "created": "2024-05-03 05:39:12.687Z",
    "updated": "2024-05-03 05:39:12.692Z",
    "name": "records_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oeap4m7w",
        "name": "level",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4p5wqtngor5zl5v",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ujdondal",
        "name": "player",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "p8543lhu",
        "name": "videoURL",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "9lkroqkh",
        "name": "progress",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "sldmjl7r",
        "name": "status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "accepted",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "ujjd1tsw",
        "name": "rating",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select \n  records.id,\n  records.level,\n  records.player,\n  records.videoURL, \n  records.progress, \n  records.status, \n  records.created, \n  records.updated,\n  cast((levels.rating * records.progress) / 100 as int) as rating\nfrom records\nleft join levels on levels.id = records.level"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j3k9nulf29i27to");

  return dao.deleteCollection(collection);
})
