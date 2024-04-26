import Ajv from 'ajv';

import { filmSchema } from '../utils/schemas';

interface Movie {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

describe('Test movie API', () => {
  it('should get a random film when no search parameters are sent', async () => {
    const getFilms = await fetch('http://localhost:3100/api/movies');
    const films = await getFilms.json();

    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(filmSchema);
    const valid = validate(films);
    expect(valid).toBeTruthy();
  });

  it('should get years with multiple winners', async () => {
    const getFilmsMultipleWinners = await fetch(
      'http://localhost:3100/api/movies?projection=years-with-multiple-winners'
    );
    const yearsMultipleWinners = await getFilmsMultipleWinners.json();
    expect(yearsMultipleWinners).toHaveProperty('years');
  });

  it('should return a list of movies given a year', async () => {
    const getFilmsbyYear = await fetch(
      'http://localhost:3100/api/movies?year=1907'
    );
    const films1907 = (await getFilmsbyYear.json()) as Movie;
    expect(films1907.year).toBe('1907');
    expect(films1907).toHaveProperty('title');
    expect(films1907.title).toBe('Movie Title');
  });
});
