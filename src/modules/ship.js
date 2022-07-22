const createShip = (length) => {
  const hitsPositions = [];

  const hit = (position) => {
    hitsPositions.push(position);
  };

  const isSunk = () => {
    if (hitsPositions.length === length) {
      return true;
    }
    return false;
  };

  return { hit, isSunk, hitsPositions };
};

export { createShip };
