import Ajv from 'ajv';

import { mockRoutesSchema, userSchema } from '../utils/schemas';

describe('Test mock routes', () => {
  let routes: string, helloWorld: any, ajv: Ajv;

  beforeAll(async () => {
    ajv = new Ajv({ allErrors: true });
    const serverRoutes = await fetch('http://localhost:3110/api/mock/routes');
    routes = await serverRoutes.text();
    helloWorld = JSON.parse(routes).find(
      (ele: any) => ele.id === 'hello-world'
    );
  });

  it('user object should match the schema', async () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const validate = ajv.compile(userSchema);
    const valid = validate(user);
    expect(valid).toBe(true);
    if (!valid) {
      expect(validate.errors).toBeNull();
    }
  });

  it('should validate the response using ajv', async () => {
    const validate = ajv.compile(mockRoutesSchema);
    const valid = validate(JSON.parse(routes));
    expect(valid).toBeTruthy();
    if (!valid) {
      expect(validate.errors).toBeNull();
    }
  });

  it('should include the hello world endpoint', async () => {
    expect(helloWorld.url).toBe('/api/hello-world');
  });

  it('should have delay property set to null', async () => {
    expect(helloWorld.delay).toBeNull();
  });

  it('should get a route with a given id', async () => {
    const id = 'get-users';
    const getUserRoute = await fetch(
      `http://localhost:3110/api/mock/routes/${id}`
    );
    const getuser = await getUserRoute.text();
    const result = JSON.parse(getuser);
    expect(result.url).toBe('/api/users');
    expect(result.method).toBe('get');
  });
});
