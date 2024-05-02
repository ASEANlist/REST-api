/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2024-05-02 05:25:39.771Z",
      "updated": "2024-05-02 16:32:38.793Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
          "id": "users_avatar",
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
          "id": "orw14jco",
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
          "id": "c9gak8at",
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
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "4p5wqtngor5zl5v",
      "created": "2024-05-02 14:50:32.298Z",
      "updated": "2024-05-02 15:15:33.298Z",
      "name": "levels",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "gszcecof",
          "name": "levelID",
          "type": "number",
          "required": true,
          "presentable": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": true
          }
        },
        {
          "system": false,
          "id": "38z52jvt",
          "name": "name",
          "type": "text",
          "required": true,
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
          "id": "ug8gkx9p",
          "name": "rating",
          "type": "number",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "zphdokqs",
          "name": "createdBy",
          "type": "text",
          "required": true,
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
          "id": "aypdi0bo",
          "name": "videoID",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_UCZAWps` ON `levels` (`levelID`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "99f7065sq9vpyht",
      "created": "2024-05-02 15:14:14.608Z",
      "updated": "2024-05-02 16:22:28.379Z",
      "name": "records",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "xtolemrr",
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
          "id": "wehvfuao",
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
        },
        {
          "system": false,
          "id": "a4jdzdvr",
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
          "id": "sbm4w1wu",
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
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_Jr3ypc9` ON `records` (\n  `player`,\n  `level`\n)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "w6o19q2d959r588",
      "created": "2024-05-02 15:21:55.511Z",
      "updated": "2024-05-02 16:34:23.617Z",
      "name": "levels_view",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "u1x8ywxr",
          "name": "levelID",
          "type": "number",
          "required": true,
          "presentable": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": true
          }
        },
        {
          "system": false,
          "id": "xsnfh57w",
          "name": "name",
          "type": "text",
          "required": true,
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
          "id": "tcbyexhx",
          "name": "rating",
          "type": "number",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "p87maniq",
          "name": "createdBy",
          "type": "text",
          "required": true,
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
          "id": "xjxpc8sh",
          "name": "videoID",
          "type": "text",
          "required": true,
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
          "id": "qe65ktj3",
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
        "query": "select\n  id, levelID, name, rating, createdBy, videoID, created, updated,\n  (ROW_NUMBER() OVER(ORDER BY rating DESC)) as rank\nfrom levels "
      }
    },
    {
      "id": "z8uj9a531fcs6x7",
      "created": "2024-05-02 15:31:57.664Z",
      "updated": "2024-05-02 16:44:01.917Z",
      "name": "players_view",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ro7kievt",
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
          "id": "iejfocnj",
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
          "id": "a5k5q75m",
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
          "id": "gjoedpae",
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
          "id": "l4wusxjw",
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
          "id": "cjrzljym",
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
    },
    {
      "id": "j3k9nulf29i27to",
      "created": "2024-05-02 15:44:21.575Z",
      "updated": "2024-05-02 16:24:29.423Z",
      "name": "records_view",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "lhacezxm",
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
          "id": "p9qi5ovq",
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
          "id": "bbbneudv",
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
          "id": "3n2hq4ts",
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
          "id": "cxopgik1",
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
          "id": "j6u2btk7",
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
