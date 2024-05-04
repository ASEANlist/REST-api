# Setup development environment

Download pocketbase executable from [here](https://pocketbase.io/docs/) and copy it to `/pocketbase` folder. (Note: Dockerfile only used in production)

```bash
bun i # install dependencies
bun run db # start PocketBase server (run this in a seperate terminal)
bun run dev # start REST API server
```
