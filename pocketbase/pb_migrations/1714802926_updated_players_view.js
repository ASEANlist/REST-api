/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z8uj9a531fcs6x7")

  collection.options = {
    "query": "select\n  users.id,\n  users.username,\n  users.avatar,\n  users.youtube,\n  users.discord,\n  users.country,\n  sum(case when (records_view.status = 'accepted') \n   then records_view.rating else 0 end) as rating,\n  (ROW_NUMBER() OVER(ORDER BY rating DESC)) as rank\nfrom users\nleft join records_view on records_view.player = users.id\ngroup by users.id"
  }

  // remove
  collection.schema.removeField("hqt7rnaj")

  // remove
  collection.schema.removeField("61zwijvi")

  // remove
  collection.schema.removeField("lmznjmvd")

  // remove
  collection.schema.removeField("lsepxxzz")

  // remove
  collection.schema.removeField("3uyuruiu")

  // remove
  collection.schema.removeField("wd2g6i6e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkdpbsn3",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tx7jljcr",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ra4hlu3",
    "name": "youtube",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f53ykaow",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "naki6fpr",
    "name": "country",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 2,
      "pattern": "\\b[A-Z]+\\b"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rytxj7b",
    "name": "rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb3daswi",
    "name": "rank",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z8uj9a531fcs6x7")

  collection.options = {
    "query": "select\n  users.id,\n  users.username,\n  users.avatar,\n  users.youtube,\n  users.discord,\n  sum(case when (records_view.status = 'accepted') \n   then records_view.rating else 0 end) as rating,\n  (ROW_NUMBER() OVER(ORDER BY rating DESC)) as rank\nfrom users\nleft join records_view on records_view.player = users.id\ngroup by users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqt7rnaj",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "61zwijvi",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmznjmvd",
    "name": "youtube",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lsepxxzz",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3uyuruiu",
    "name": "rating",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wd2g6i6e",
    "name": "rank",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("qkdpbsn3")

  // remove
  collection.schema.removeField("tx7jljcr")

  // remove
  collection.schema.removeField("5ra4hlu3")

  // remove
  collection.schema.removeField("f53ykaow")

  // remove
  collection.schema.removeField("naki6fpr")

  // remove
  collection.schema.removeField("8rytxj7b")

  // remove
  collection.schema.removeField("pb3daswi")

  return dao.saveCollection(collection)
})
