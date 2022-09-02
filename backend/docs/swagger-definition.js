const swaggerJsdoc = require('swagger-jsdoc');
const config = require('config');

const baseURL = config.get('baseURL');
if (!baseURL) {
  throw new Error('baseURL is not available in config');
}

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pahachaan API Documention',
      version: '1.0.0',
    },
    servers: [
      {
        url: baseURL,
        description: "Local server URL",
      }
    ],
    tags: [
      { name: 'Identity' },
      { name: 'Profile' }
    ],
    securityDefinitions: {
      myCookie: {
        type: 'apiKey',
        name: 'Cookie',
        in: 'header'
      },
    },
    components: {
      schemas: {
        identity: {
          type: 'object',
          required: ['id'],
          properties: {
            id: {
              type: 'string',
            },
            profileId: {
              type: 'string',
            },
          },
        },
        errors: {
          unauthorized: {
            type: 'object',
            required: ['error'],
            properties: {
              error: {
                type: 'string',
              }
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;