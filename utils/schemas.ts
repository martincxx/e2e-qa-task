export const configSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    log: { type: 'string' },
    config: {
      type: 'object',
      properties: {
        readFile: { type: 'boolean' },
        readArguments: { type: 'boolean' },
        readEnvironment: { type: 'boolean' },
        fileSearchFrom: { type: 'string' },
        allowUnknownArguments: { type: 'boolean' },
      },
      required: [
        'readFile',
        'readArguments',
        'readEnvironment',
        'fileSearchFrom',
        'allowUnknownArguments',
      ],
    },
    plugins: {
      type: 'object',
      properties: {
        proxyRoutesHandler: {
          type: 'object',
          additionalProperties: true,
        },
        adminApi: {
          type: 'object',
          properties: {
            https: {
              type: 'object',
              properties: {
                enabled: { type: 'boolean' },
              },
              required: ['enabled'],
            },
            port: { type: 'integer' },
            host: { type: 'string' },
          },
          required: ['https', 'port', 'host'],
        },
        inquirerCli: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            emojis: { type: 'boolean' },
          },
          required: ['enabled', 'emojis'],
        },
        openapi: {
          type: 'object',
          properties: {
            collection: {
              type: 'object',
              properties: {
                id: { type: 'string' },
              },
              required: ['id'],
            },
          },
          required: ['collection'],
        },
        register: {
          type: 'array',
          items: { type: ['null', 'object'] },
        },
      },
    },
    mock: {
      type: 'object',
      properties: {
        routes: {
          type: 'object',
          properties: {
            delay: { type: 'integer', minimum: 0 },
          },
          required: ['delay'],
        },
        collections: {
          type: 'object',
          properties: {
            selected: { type: 'string' },
          },
          required: ['selected'],
        },
      },
    },
    server: {
      type: 'object',
      properties: {
        cors: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            options: {
              type: 'object',
              properties: {
                preflightContinue: { type: 'boolean' },
              },
              required: ['preflightContinue'],
            },
          },
          required: ['enabled', 'options'],
        },
        jsonBodyParser: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            options: { type: 'object', additionalProperties: true },
          },
          required: ['enabled', 'options'],
        },
        urlEncodedBodyParser: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            options: {
              type: 'object',
              properties: {
                extended: { type: 'boolean' },
              },
              required: ['extended'],
            },
          },
          required: ['enabled', 'options'],
        },
        https: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
          },
          required: ['enabled'],
        },
        port: { type: 'integer' },
        host: { type: 'string' },
      },
      required: [
        'cors',
        'jsonBodyParser',
        'urlEncodedBodyParser',
        'https',
        'port',
        'host',
      ],
    },
    files: {
      type: 'object',
      properties: {
        babelRegister: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            options: { type: 'object', additionalProperties: true },
          },
          required: ['enabled', 'options'],
        },
        enabled: { type: 'boolean' },
        path: { type: 'string' },
        watch: { type: 'boolean' },
      },
      required: ['babelRegister', 'enabled', 'path', 'watch'],
    },
    variantHandlers: {
      type: 'object',
      properties: {
        register: {
          type: 'array',
          items: { type: 'object', additionalProperties: true },
        },
      },
    },
  },
  required: [
    'log',
    'config',
    'plugins',
    'mock',
    'server',
    'files',
    'variantHandlers',
  ],
};

export const mockRoutesSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      url: { type: 'string' },
      method: {
        oneOf: [
          { type: 'string' },
          {
            type: 'array',
            items: { type: 'string' },
          },
        ],
      },
      delay: { type: ['null', 'integer'] },
      variants: {
        type: 'array',
        items: { type: 'string' },
      },
    },
    required: ['id', 'url', 'method', 'variants'],
  },
};

export const userSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      age: { type: 'integer' },
    },
    required: ['id', 'name'],
  },
  additionalProperties: false,
};

export const filmSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: { type: 'string' },
    studios: { type: 'array', items: { type: 'string' } },
    producers: { type: 'array', items: { type: 'string' } },
    winner: { type: 'boolean' },
  },
  required: ['id', 'title', 'studios', 'producers', 'winner'],
  additionalProperties: false,
};
