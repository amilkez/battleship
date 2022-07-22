import { createShip } from '../src/modules/ship';

describe('Ship Factory', () => {
  let destroyer;
  beforeEach(() => {
    destroyer = createShip(2);
  });

  it('Expects destroyer to have not sunk', () => {
    console.log(destroyer.isSunk());
    expect(destroyer.isSunk()).toBeFalsy();
  });
  it('Expects destroyer to have sunk', () => {
    destroyer.hit(3);
    destroyer.hit(2);
    expect(destroyer.isSunk()).toBeTruthy();
  });
  it('Expects destroyer to have positions hit', () => {
    destroyer.hit(2);
    expect(destroyer.hitsPositions).toContain(2);
    expect(destroyer.hitsPositions).toHaveLength(1);
  });
});
