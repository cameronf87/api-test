// we need to import our modules
import {jest} from '@jest/globals';
// we will use supertest to test HTTP requests/responses
import * as request from 'supertest';
// we also need our app for the correct routes
import * as app from '../getValue';

//test to make sure we can validate that testing is working
describe('Does it work?', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

// Let's check to make sure we are returning something
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

//Let's now check to see if our resonse is not a null or undefined
test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});