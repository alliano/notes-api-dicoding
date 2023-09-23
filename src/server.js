const Hapi = require('@hapi/hapi');
const { routes } = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    // allow all origin golabaly
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`The server is running on ${server.info.uri}`);
};
init();
