import { faker } from '@faker-js/faker';

export const POSTMAN_BASE_URL =
  'https://postman-integration-testing.glitch.me/';
export const POSTMAN_ECHO = 'https://postman-echo.com/get';

export const USER_API = 'http://localhost:3100/api/users';

interface User {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
}

export function createRandomUserAccount(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUserAccount, {
  count: 5,
});
