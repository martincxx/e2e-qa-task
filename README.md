# Template project with Typescript eslint and jest

This exercise uses two APIs built using mocks-server.org. The base one shows the example with the full collection, and it is very basic. Get it by running first:

```bash
docker run -e MOCKS_MOCK_COLLECTIONS_SELECTED='full' -ti -p 3100:3100 -p 3110:3110 mindosoft/mock:0.2
```

For the second example you will work with a (separated) API. After running the following command you will get a simple Films API:

```bash
docker run martincx/mocks-server-films:test
```

## Notes and prerequisites

For a complete reference (and example usage) of Mocks-Server, please refer to its [official documentation](https://www.mocks-server.org/).

For both examples, make sure to have [Docker](https://www.docker.com/) installed and configured.

Bear in mind that both servers use the same ports, so either change the configuration of the second example, or to make it simpler just run one at a time.

## Build your own API using Mocks-Server.org and Docker

Using as example Film API's  `mocks.config.js` and its implementation in the `mocks` folder, you can also mock an API of your own. Check the `Dockerfile` provided and then build your image using appropriate image names and tags:

```bash
docker build -t your-image-name:your-tag .

```

And finally run it on your local PC

```bash
docker run -ti -p 3100:3100 -p 3110:3110 your-image-name:your-tag
```
