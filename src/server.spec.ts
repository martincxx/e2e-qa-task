import Ajv from 'ajv';

import { configSchema } from '../utils/schemas';

describe('Test server info', () => {
  const serverInfo = { versions: { adminApi: '4.0.0', core: '4.0.1' } };
  it('should return about info', async () => {
    const response = await fetch('http://localhost:3110/api/about');
    const about = await response.json();

    expect(about).toEqual(serverInfo);
  });

  it('should test the mock server configuration using a schema', async () => {
    const serverConfig = await fetch('http://localhost:3110/api/config');
    const config = await serverConfig.json();

    const ajv = new Ajv({ allErrors: true });

    const validate = ajv.compile(configSchema);
    const valid = validate(config);
    expect(valid).toBeTruthy();
  });
});
