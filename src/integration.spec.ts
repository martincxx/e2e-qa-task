import { isUUID } from 'validator';

import { POSTMAN_BASE_URL } from '../utils/apis';

interface RegistrationToken {
  token: string;
}

interface User {
  name: string;
}
let registeredToken: string;

describe('Integration testing with Postman', () => {
  it('should register a new user', async () => {
    const registerUser = await fetch(`${POSTMAN_BASE_URL}/register`, {
      method: 'POST',
    });
    const userToken = (await registerUser.json()) as RegistrationToken;
    expect(userToken).toHaveProperty('token');
    registeredToken = userToken.token;
    expect(registeredToken).toBeTruthy();
  });

  it('should check validity of token', async () => {
    expect(typeof registeredToken).toBe('string');
    expect(registeredToken).toHaveLength(36);
    expect(isUUID(registeredToken)).toBe(true);
  });

  it('should get username using the registrationToken', async () => {
    const getName = await fetch(
      `${POSTMAN_BASE_URL}/my-name?token=${registeredToken}`
    );

    const username = (await getName.json()) as User;
    expect(username).toHaveProperty('name');
    expect(username.name).toBeTruthy();
    expect(typeof username.name).toBe('string');
  });

  it('should unregister the user with its token', async () => {
    const raw = JSON.stringify({ token: registeredToken });
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    const unregisterToken = await fetch(
      `${POSTMAN_BASE_URL}/unregister`,
      requestOptions
    );

    expect(unregisterToken.status).toBe(200);
  });

  afterAll(async () => {
    await new Promise<void>(function (resolve) {
      return setTimeout(() => resolve(), 1000);
    });
  });
});
