function unpackGiftbox(giftBox, wish) {
  for (let i = 0; i < giftBox.length; i++) {
    if (wish === giftBox[i]) return true;
    if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result) return true;
    }
  }
  return false;
}

function unpackGiftbox(giftBox, wish) {
  // recursive case
  let anotherBoxes = [];
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      anotherBoxes = anotherBoxes.concat(giftBox[i]);
    }
  }

  if (anotherBoxes.length > 0) {
    return unpackGiftbox(anotherBoxes, wish);
  }

  // base case
  return false;
}
