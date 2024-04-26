import { POSTMAN_ECHO } from '../utils/apis';

describe('Test headers', () => {
  it('should test headers', async () => {
    const getBase = await fetch(POSTMAN_ECHO);
    const { headers } = getBase;

    expect(headers.get('content-type')).toBe('application/json; charset=utf-8');
  });
});
