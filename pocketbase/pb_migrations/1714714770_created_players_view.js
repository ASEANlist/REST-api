/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z8uj9a531fcs6x7",
    "created": "2024-05-03 05:39:30.145Z",
    "updated": "2024-05-03 05:39:30.151Z",
    "name": "players_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nixrg9am",
        "name": "username",
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
        "id": "3kx1xueq",
        "name": "avatar",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": null,
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "kbhicits",
        "name": "youtube",
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
        "id": "uhi05wet",
        "name": "discord",
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
        "id": "z5czfs7z",
        "name": "rating",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "8tviln1d",
        "name": "rank",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
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
      "query": "select\n  users.id,\n  users.username,\n  users.avatar,\n  users.youtube,\n  users.discord,\n  sum(case when (records_view.status = 'accepted') \n   then records_view.rating else 0 end) as rating,\n  (ROW_NUMBER() OVER(ORDER BY rating DESC)) as rank\nfrom users\nleft join records_view on records_view.player = users.id\ngroup by users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z8uj9a531fcs6x7");

  return dao.deleteCollection(collection);
})
