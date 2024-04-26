import { isUUID } from 'validator';

import { USERS } from '../utils/apis';

describe('Using faker to mock a random user account', () => {
  USERS.forEach((user) => {
    it('should validate ' + user, async () => {
      expect(typeof user).toBe('object');
      expect(user).toHaveProperty('username');
      expect(isUUID(user.userId)).toBe(true);
    });
  });
});
