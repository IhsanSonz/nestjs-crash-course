import { AnotherOneMiddleware } from './another-one.middleware';

describe('AnotherOneMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherOneMiddleware()).toBeDefined();
  });
});
