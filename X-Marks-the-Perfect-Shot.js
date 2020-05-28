const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  let lastStop = [0, 0];
  for (let move of moves) {
    if (move === "north") {
      lastStop[1] += 1;
    } else if (move === "east") {
      lastStop[0] += 1;
    } else if (move === "south") {
      lastStop[1] -= 1;
    } else if (move === "west") {
      lastStop[0] -= 1;
    }
  }
  return lastStop;
};


finalPosition(moves);