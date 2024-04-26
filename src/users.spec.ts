import Ajv from 'ajv';

import { userSchema } from '../utils/schemas';
import { USER_API } from '../utils/apis';

describe('User tests on API', () => {
  //happy path get all users

  it('should return a list of users', async () => {
    const getUsers = await fetch(USER_API);
    const users: any = await getUsers.json();

    expect(users).toHaveLength(8);
    //TODO
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(userSchema);
    const valid = validate(users);
    expect(valid).toBeTruthy();
  });

  it('should show an error message when something fails', async () => {
    //TODO
    const status = 500;
    expect(status).toBe(500);
  });

  //happy path get an existing user
  it('should get a user given its id', async () => {
    const idTwo = '2';
    const getUser = await fetch(`${USER_API}/${idTwo}`);

    const userTwo = await getUser.json();
    expect(getUser.status).toBe(200);
    expect(userTwo).toHaveProperty('id');
    expect(userTwo).toHaveProperty('name');
    expect(userTwo).toHaveProperty('age');
  });

  //trying to retrieve a non existing user

  it('should show an error when trying to retrieve a user using a non valid id', async () => {
    const nonExistingId = 258;
    const getNotFound = await fetch(`${USER_API}/${nonExistingId}`);
    expect(getNotFound.status).toBe(404);
    const notFoundError = await getNotFound.json();
    expect(notFoundError).toHaveProperty('message');
  });

  it('should show an error message when something fails while fetching an existing id', async () => {
    //TODO
  });
  //happy path
  it('should create a new user', async () => {
    //TODO
  });

  it('should show an error after failing user creation', async () => {
    //TODO
  });

  it('should show an error after failing to delete an existing user', async () => {
    //TODO
  });

  it('ids should fail when trying to fetch users with the same id', async () => {
    const idFive = '5';
    const getUser = await fetch(`${USER_API}/${idFive}`);
    const internalError = await getUser.json();
    expect(getUser.status).toBe(500);
    expect(internalError).toHaveProperty('message');
    expect(JSON.stringify(internalError)).toContain('Internal error');
  });

  //TODO Test attempting to perform other operations on these endpoints
});
