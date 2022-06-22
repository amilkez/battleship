import sayHello from '../src/index';

it('Says hello', () => {
  expect(sayHello()).toMatch(/hello/);
});
