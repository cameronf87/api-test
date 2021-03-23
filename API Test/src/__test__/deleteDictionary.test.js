// we will use supertest to test HTTP requests/responses
import * as request from 'supertest';
// we also need our app for the correct routes
import * as app from '../deleteDictionary';

//test to make sure we can validate
describe('Does it work?', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
describe('Did the request return anything?', () => {
    it('Should return true', () => {
        expect.extend({
            hasID(key, value) {
              return {
                pass: true,
                message: () => 'true',
              };
            },
          }
        )
    })
})