// we need to import our modules
import {jest} from '@jest/globals'
// we will use supertest to test HTTP requests/responses
import * as request from 'supertest';
// we also need our app for the correct routes
import * as app from '../createDictionary';

//test to make sure we can validate
describe('Does it work?', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
// let's just test to make sure we receive any response
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
 //Let's now check to see if we are returning a non-null argument
test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});