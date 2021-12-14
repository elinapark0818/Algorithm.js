function arrLength(arr) {
  if (arr.isEmpty() === true) {
    return 0;
  }

  const tail = arr.slice(1);

  return 1 + arrLength(tail);
}

function arrLength(arr) {
  if (arr.isEmpty() === true) {
    return 0;
  }

  return 1 + arrLength(arr.slice(1));
}
